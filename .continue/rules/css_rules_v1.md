---
name: My CSS rules
globs: "**/*.css"
alwaysApply: true
description: Rules based on the best practices obtained from Scrimba FS course
---
# CSS standards

1. **Link State Management**: 
   Every anchor element (`a`) should have its states defined following the LVHA order (Link, Visited, Hover, Active) to ensure correct style cascading.
   
   **Required combinations:**
   - Base state: `a`
   - Interactive states: At least `a:hover` and `a:active` should be visually distinct.
   - *Note: Always place `:hover` after `:visited`, and `:active` after `:hover`.*