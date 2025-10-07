# 🔧 Troubleshooting Guide

## Common Issues and Solutions

---

## 🚨 Development Server Issues

### Issue: Server won't start

**Symptoms**: Error when running `npm start`

**Solutions**:

```powershell
# 1. Navigate to frontend directory
cd "d:\timepass\New folder\devconnect\devconnect-frontend"

# 2. Clear cache and reinstall
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install

# 3. Start server
npm start
```

### Issue: Port 3000 already in use

**Symptoms**: "Port 3000 is already in use"

**Solutions**:

```powershell
# Option 1: Kill the process
Get-Process -Name "node" | Stop-Process -Force

# Option 2: Use different port
$env:PORT=3001; npm start
```

---

## 🎨 Styling Issues

### Issue: Styles not loading

**Symptoms**: Website looks unstyled or broken

**Solutions**:

1. **Hard refresh browser**: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. **Clear browser cache**: Settings → Clear browsing data
3. **Check CSS imports**: Verify all CSS files are imported in components
4. **Restart dev server**: Stop and restart `npm start`

### Issue: Fonts not loading

**Symptoms**: Text appears in default system font

**Solutions**:

1. **Check internet connection**: Google Fonts require internet
2. **Verify index.html**: Ensure Google Fonts link is present
3. **Check browser console**: Look for font loading errors

---

## 🔐 Authentication Issues

### Issue: Login/Register not working

**Symptoms**: Forms submit but nothing happens

**Solutions**:

1. **Check backend server**: Ensure backend is running on port 5000
2. **Verify API endpoints**: Check `Login.js` and `Register.js` for correct URLs
3. **Check browser console**: Look for network errors
4. **Test backend directly**: Use Postman or curl to test API

**Start backend**:

```powershell
cd "d:\timepass\New folder\devconnect\devconnect-backend"
npm start
```

### Issue: Token/Session issues

**Symptoms**: Can't stay logged in or access profile

**Solutions**:

1. **Clear localStorage**: Browser DevTools → Application → Local Storage → Clear
2. **Check token storage**: Verify token is saved after login
3. **Backend validation**: Ensure backend is validating tokens correctly

---

## 📱 Responsive Design Issues

### Issue: Mobile menu not working

**Symptoms**: Hamburger menu doesn't open/close

**Solutions**:

1. **Check browser console**: Look for JavaScript errors
2. **Verify Navbar.js**: Ensure state management is working
3. **Test in different browsers**: Try Chrome, Firefox, Edge
4. **Clear cache**: Hard refresh the page

### Issue: Layout broken on mobile

**Symptoms**: Elements overlapping or cut off

**Solutions**:

1. **Check viewport meta tag**: Verify in `public/index.html`
2. **Test responsive breakpoints**: Use browser DevTools device mode
3. **Review CSS media queries**: Check component CSS files
4. **Disable browser zoom**: Reset to 100%

---

## 🌐 Browser Compatibility

### Issue: Features not working in specific browser

**Symptoms**: Works in Chrome but not in other browsers

**Solutions**:

1. **Update browser**: Ensure latest version
2. **Check backdrop-filter support**: Some older browsers don't support glassmorphism
3. **Fallback styles**: Add fallbacks for unsupported features
4. **Test in modern browsers**: Chrome, Firefox, Edge, Safari (latest versions)

**Browser support for key features**:

- ✅ Chrome 76+ (backdrop-filter)
- ✅ Firefox 103+ (backdrop-filter)
- ✅ Edge 79+ (backdrop-filter)
- ✅ Safari 9+ (backdrop-filter with -webkit prefix)

---

## 🎭 Animation Issues

### Issue: Animations not smooth

**Symptoms**: Choppy or laggy animations

**Solutions**:

1. **Check GPU acceleration**: Ensure hardware acceleration is enabled in browser
2. **Reduce animations**: Comment out some animations in CSS
3. **Check system resources**: Close other applications
4. **Update graphics drivers**: Ensure latest drivers installed

### Issue: Animations not playing

**Symptoms**: Elements appear static

**Solutions**:

1. **Check CSS**: Verify animation keyframes are defined
2. **Browser DevTools**: Inspect element and check computed styles
3. **Disable browser extensions**: Some extensions block animations
4. **Check reduced motion**: System accessibility settings might disable animations

---

## 🔍 Console Errors

### Common Error Messages

#### "Cannot find module"

**Solution**: Install missing dependency

```powershell
npm install [module-name]
```

#### "React Hook useEffect has a missing dependency"

**Solution**: Add dependency to useEffect array or disable warning

```javascript
// eslint-disable-next-line react-hooks/exhaustive-deps
```

#### "Failed to fetch"

**Solution**:

- Check backend is running
- Verify API URL is correct
- Check CORS settings in backend

#### "localStorage is not defined"

**Solution**:

- Check if code runs on server-side
- Add null checks before using localStorage

---

## 🗄️ Database Issues

### Issue: User data not persisting

**Symptoms**: Registered users disappear after restart

**Solutions**:

1. **Check MongoDB connection**: Verify connection string in backend
2. **Start MongoDB**: Ensure MongoDB service is running
3. **Check database name**: Verify correct database is being used
4. **Review backend logs**: Look for database errors

**Start MongoDB** (if installed locally):

```powershell
# Windows
net start MongoDB

# Or using MongoDB Compass
# Open MongoDB Compass and connect
```

---

## 🎨 Customization Issues

### Issue: Color changes not applying

**Symptoms**: Changed CSS variables but colors stay the same

**Solutions**:

1. **Clear browser cache**: Hard refresh
2. **Check CSS specificity**: More specific selectors override variables
3. **Verify variable syntax**: Use `var(--variable-name)`
4. **Restart dev server**: Stop and start `npm start`

### Issue: Font changes not working

**Symptoms**: Changed font family but text looks the same

**Solutions**:

1. **Import font**: Add Google Fonts link or import in CSS
2. **Check font name**: Verify exact font family name
3. **Add fallback fonts**: Include system fonts as fallback
4. **Clear cache**: Hard refresh browser

---

## 🚀 Performance Issues

### Issue: Slow page load

**Symptoms**: Website takes long to load

**Solutions**:

1. **Optimize images**: Compress and resize images
2. **Reduce animations**: Limit number of animated elements
3. **Code splitting**: Implement lazy loading for routes
4. **Check network**: Verify internet connection speed

### Issue: High memory usage

**Symptoms**: Browser becomes slow or crashes

**Solutions**:

1. **Close unused tabs**: Reduce browser memory usage
2. **Check for memory leaks**: Review useEffect cleanup functions
3. **Limit re-renders**: Use React.memo and useMemo
4. **Update browser**: Ensure latest version

---

## 🛠️ Development Tools

### Useful Browser DevTools Commands

**Check React version**:

```javascript
// In browser console
console.log(React.version);
```

**Check localStorage**:

```javascript
// View all stored data
console.log(localStorage);

// Clear all data
localStorage.clear();
```

**Check current route**:

```javascript
// View current URL
console.log(window.location.pathname);
```

---

## 📞 Getting Help

### Before Asking for Help

1. **Check browser console**: Look for error messages
2. **Review documentation**: Check the guide files
3. **Test in different browser**: Isolate browser-specific issues
4. **Restart everything**: Server, browser, even computer
5. **Check recent changes**: What was the last thing you modified?

### Information to Provide

When reporting an issue, include:

- Error message (exact text)
- Browser and version
- Steps to reproduce
- What you expected vs what happened
- Recent changes made
- Console logs/screenshots

---

## 🔄 Reset to Working State

### Nuclear Option: Complete Reset

If everything is broken and you want to start fresh:

```powershell
# 1. Stop all servers
Get-Process -Name "node" | Stop-Process -Force

# 2. Navigate to frontend
cd "d:\timepass\New folder\devconnect\devconnect-frontend"

# 3. Clean install
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install

# 4. Start fresh
npm start
```

### Restore Original Files

If you want to undo all design changes:

- The original files weren't backed up
- You can use Git to revert if you committed before changes
- Or manually remove the new CSS and restore inline styles

---

## ✅ Quick Checklist

When something goes wrong, check:

- [ ] Is the development server running?
- [ ] Is the backend server running (if needed)?
- [ ] Did I clear browser cache?
- [ ] Are there errors in browser console?
- [ ] Is my internet connection working?
- [ ] Did I save all files?
- [ ] Is the correct port being used?
- [ ] Are all dependencies installed?

---

## 🎯 Prevention Tips

### Best Practices

1. **Commit often**: Use Git to save working states
2. **Test changes**: Test after each major change
3. **Keep backups**: Save copies of working code
4. **Update regularly**: Keep dependencies up to date
5. **Use DevTools**: Monitor console for warnings
6. **Read errors**: Error messages usually tell you what's wrong

---

**Remember**: Most issues can be solved by:

1. Reading the error message carefully
2. Checking browser console
3. Restarting the dev server
4. Clearing browser cache

Good luck! 🍀
