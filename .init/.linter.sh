#!/bin/bash
cd /home/kavia/workspace/code-generation/basic-crud-operations-system-34191-34200/crud_backend
npm run lint
LINT_EXIT_CODE=$?
if [ $LINT_EXIT_CODE -ne 0 ]; then
  exit 1
fi

