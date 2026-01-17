import { supabase } from '../lib/supabase';

export const getSetting = async (key, defaultValue = null) => {
    try {
        const { data, error } = await supabase
            .from('settings')
            .select('value')
            .eq('key', key)
            .single();

        if (error) {
            // If the table doesn't exist or key not found, return default
            console.warn(`Error fetching setting ${key}:`, error);
            return defaultValue;
        }

        if (data && data.value) {
            // Attempt to parse if it's a string but looks like json, or we expect an object/array
            if (typeof data.value === 'string') {
                try {
                    // Simple heuristic: if it starts with [ or {, try to parse
                    const trimmed = data.value.trim();
                    if ((trimmed.startsWith('[') && trimmed.endsWith(']')) ||
                        (trimmed.startsWith('{') && trimmed.endsWith('}'))) {
                        return JSON.parse(data.value);
                    }
                } catch (e) {
                    // If parse fails, return original string
                }
            }
            return data.value;
        }
        return defaultValue;
    } catch (err) {
        console.error(`Unexpected error fetching setting ${key}:`, err);
        return defaultValue;
    }
};

export const updateSetting = async (key, value) => {
    try {
        const { error } = await supabase
            .from('settings')
            .upsert({ key, value });

        if (error) throw error;
        return true;
    } catch (err) {
        console.error(`Error updating setting ${key}:`, err);
        throw err;
    }
};
