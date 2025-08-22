interface CharacterModule {
    /**
     * Checks if all characters in the string are ASCII characters (code points 0-127).
     */
    isAscii: (str: string) => boolean;

    /**
     * Checks if all characters in the string are alphabetic characters.
     * Includes both ASCII letters (A-Z, a-z) and Unicode alphabetic characters.
     */
    isAlphabetic: (str: string) => boolean;

    /**
     * Checks if all characters in the string are numeric characters.
     * Includes both ASCII digits (0-9) and Unicode numeric characters.
     */
    isNumeric: (str: string) => boolean;

    /**
     * Checks if all characters in the string are alphanumeric characters.
     * Includes ASCII letters (A-Z, a-z), digits (0-9), and Unicode alphabetic/numeric characters.
     */
    isAlphaNumeric: (str: string) => boolean;

    /**
     * Checks if all characters in the string are lowercase characters.
     * Includes both ASCII lowercase letters (a-z) and Unicode lowercase characters.
     */
    isLowercase: (str: string) => boolean;

    /**
     * Checks if all characters in the string are uppercase characters.
     * Includes both ASCII uppercase letters (A-Z) and Unicode uppercase characters.
     */
    isUppercase: (str: string) => boolean;

    /**
     * Checks if all characters in the string are control characters.
     */
    isControl: (str: string) => boolean;

    /**
     * Checks if all characters in the string are whitespace characters.
     * Includes space, tab, newline, and other Unicode whitespace characters.
     */
    isWhitespace: (str: string) => boolean;

    /**
     * Converts all characters in the string to lowercase.
     * Supports both ASCII and Unicode characters with proper case conversion.
     */
    toLowercase: (str: string) => string;

    /**
     * Converts all characters in the string to uppercase.
     * Supports both ASCII and Unicode characters with proper case conversion.
     */
    toUppercase: (str: string) => string;
}

declare const Character: CharacterModule;
export = Character;