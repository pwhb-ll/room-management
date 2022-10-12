# Backlog
* Add password complexity checking on /register and /profile pages (only checks for length currently despite what the pages say)

# 1.0.27
* Update dependencies

# 1.0.26
* On the client, track whether the login session has expired and if so, clear $loginSession
* Update dependencies

# 1.0.25
* Bump dependencies
* Simplify Sign In With Google

# 1.0.24
* Bump dependencies

# 1.0.23
* Restructured server-side libraries to $lib/server based on https://github.com/sveltejs/kit/pull/6623
* General cleanup

# 1.0.22
* Move google-auth-library and jsonwebtoken to devDependencies from dependencies and other cleanup to package.json

# 1.0.21
* Refactor to use $env/static/private and public, dropping dotenv dependency
* Remove @types/cookie and bootstrap-icons dependencies

# 1.0.20
* Bump dependencies
* Add service-worker
* Add dropdown, avatarm and user's first name to navbar once user is logged in
* Refactor user session and update typing

# 1.0.19
* Added SvelteKit's cookies implementation in RequestEvent
* [Bug] Logout then go to http://localhost/admin gives error on auth.ts:39

# 1.0.18
* Bump dependencies

# 1.0.17
* Bump dependencies

# 1.0.16
* [Bug] Fixed LayoutServerLoad typing

# 1.0.15
* [Bug] Replaced use of Action type in +server.ts files (only works for +page.server.ts)

# 1.0.14
* Refactor routing to be folder, not file-based - https://github.com/sveltejs/kit/discussions/5774 (file system router). More info: https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3294867
* Move bootstrap SCSS import to JavaScript in +layout.svelte
* Refactor as session was removed in https://github.com/sveltejs/kit/discussions/5883

# 1.0.13
* Bump dependencies

# 1.0.12
* Remove unnecessary reference from app.d.ts
* Remove commented lines in svelte.config.js

# 1.0.10
* Bump dependencies
* Adjust for changes to SvelteKit
* Improve typings

# 1.0.9
* Bump dependencies
* Adjust for changes to SvelteKit with respect to vite

# 1.0.7
* Bump dependencies and verify against latest SvelteKit
* Additional changes for register PostgreSQL function

# 1.0.5
* Bump dependencies
* [Fix] Flaw in register allowing user to register over top of an existing account
* Additional checks of submitted data

# 1.0.4
* Bump dependencies

# 1.0.4
* [Fix] If you login with a Google account, you cannot Update the Profile (UI is looking for password and confirm password which don't make sense in this context)
* Added Content Security Policy

# 1.0.3
* [Fix] user created or updated when password mismatches (@lxy-yz)
* Updated project dependencies
* Replaced Sveltestrap's Toast with native Bootstrap 5 JavaScript to avoid error with @popperjs import (lacks type=module)
* Added declarations for Session and Locals for type safety

# 1.0.2
* [Fix] Updated endpoints and hooks to conform to SvelteKit's API changes.
* Updated project dependencies

# 1.0.1
* Switched to dotenv vs. VITE_ env values for better security
* Load Sign in with Google via code instead of static template
* Fix logout (didn't work if session expired)
* Fix login button rendering if that's the starting page

# Backlog
* [Low] Add password complexity check
* [Low] Add Google reCaptcha 3