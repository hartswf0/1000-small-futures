# API Key Tooltip Fix

## Issue
Tutorial tooltip was covering the API key input box, making it impossible to see where to paste the key.

## Fix Applied
Changed tooltip position from `bottom` to `top`:

```javascript
// Before
{target:'#keyInput', position:'bottom'}  // Covers input box

// After  
{target:'#keyInput', position:'top'}  // Above input box
```

## Result
- ✅ Tooltip now appears ABOVE the input box
- ✅ Input box is fully visible
- ✅ User can see where to paste key
- ✅ SAVE button is visible

## Visual

### Before (Broken)
```
┌─────────────────────┐
│ API Key Input Box   │
│ [____________]      │ ← Can't see this
└─────────────────────┘
        ↓
┌─────────────────────┐
│ ◎ PASTE KEY         │
│ Paste your API...   │
│ [BACK] [FORWARD]    │
└─────────────────────┘
        ↑ Tooltip covers input!
```

### After (Fixed)
```
┌─────────────────────┐
│ ◎ PASTE KEY         │
│ Paste your API...   │
│ [BACK] [FORWARD]    │
└─────────────────────┘
        ↓
┌─────────────────────┐
│ API Key Input Box   │
│ [____________]      │ ← Visible!
│ [SAVE]              │
└─────────────────────┘
```

## Confirmation Message
The main app already shows a confirmation when key is saved:
```javascript
showHelpBanner('API key saved. Channels will auto-compose scenes.');
```

This appears at the top of the screen after clicking SAVE.

## Test
1. Open tutorial
2. Click QUICKSTART
3. Step 2: API key input should be visible
4. Paste key
5. Click SAVE
6. Should see "API key saved" banner
7. Click FORWARD to continue

✅ Fixed
