const moduleVisitor = require('eslint-module-utils/moduleVisitor').default

module.exports = {
  'no-relative-parent-imports': {
    create(context) {
      if (context.getFilename() === '<text>') return {}

      const checkSourceValue = node => {
        if (!node.value.includes('../')) return

        context.report({
          message: 'Relative imports from parent directories are not allowed. Use absolute imports instead.',
          node,
        })
      }
      return moduleVisitor(checkSourceValue, context.options[0])
    },
    meta: {
      docs: {
        category: 'Possible Errors',
        description: 'disallow parent relative imports',
        recommended: false,
      },
      schema: [],
    },
  },
}
