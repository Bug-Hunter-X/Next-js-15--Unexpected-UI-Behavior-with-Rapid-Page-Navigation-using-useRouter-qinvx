# Next.js 15 Rapid Navigation Bug

This repository demonstrates an uncommon bug encountered in Next.js 15 applications involving rapid navigation between pages using the `useRouter` hook.  The issue primarily manifests as inconsistencies in the UI, potentially displaying stale or unexpected content after quickly switching between routes.

## Bug Description
When navigating between pages (e.g., Home and About) at a high frequency (e.g., rapidly clicking buttons), the UI might not update correctly or show unexpected content. This is likely because the `useRouter` hook does not immediately reflect the changes during rapid navigation.

## Reproduction Steps
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Quickly click the buttons to navigate between the Home and About pages. Observe the behavior.

## Solution
The solution involves improving the navigation logic to handle rapid transitions more gracefully and ensure the UI remains consistent. The updated code is provided in the `bugSolution.js` file.  This might involve using event listeners to handle clicks more deliberately, debouncing navigation actions, or other state management techniques.
