export const translations = {
  en: {
    nav: {
      title: 'Claude CLI Guide',
      installation: 'Installation',
      permissions: 'Permissions',
      usage: 'Usage Tips',
      automation: 'Automation',
      hooks: 'Hooks & Settings',
      commands: 'Commands',
      troubleshooting: 'Troubleshooting'
    },
    common: {
      copy: 'Copy',
      copied: 'Copied!',
      tip: 'Tip',
      warning: 'Warning',
      note: 'Note',
      example: 'Example'
    },
    installation: {
      title: 'Installation & Setup',
      subtitle: 'Get started with Claude CLI in minutes',
      requirements: 'Requirements',
      requirementsList: [
        'Node.js 18 or higher',
        'npm or yarn package manager',
        'Terminal access (Command Prompt, PowerShell, or Terminal)',
        'Internet connection'
      ],
      steps: 'Installation Steps',
      step1: 'Install Claude CLI globally',
      step2: 'Login with your Claude account',
      step3: 'Start using Claude CLI',
      firstProject: 'Create Your First Project',
      projectTip: 'Claude CLI will create a new directory for your project'
    },
    permissions: {
      title: 'Permission Management',
      subtitle: 'Control what Claude can do on your system',
      intro: 'Claude CLI asks for permission before executing potentially dangerous operations. You can manage these permissions in several ways:',
      methods: {
        interactive: {
          title: 'Interactive Mode (Default)',
          description: 'Claude will ask for permission for each sensitive operation',
          tip: 'Recommended for beginners'
        },
        skipAll: {
          title: 'Skip All Permissions',
          description: 'Dangerous! Allows Claude to perform any operation without asking',
          warning: 'Only use this if you fully trust the operations Claude will perform'
        },
        toggle: {
          title: 'Toggle During Session',
          description: 'Press Shift+Tab during a session to toggle permission mode',
          tip: 'Useful when you want to temporarily skip permissions'
        }
      },
      bestPractices: 'Best Practices',
      practices: [
        'Always review operations before approving',
        'Use skip mode only in controlled environments',
        'Enable permissions for production systems',
        'Review generated code before execution'
      ]
    },
    usage: {
      title: 'Usage Tips & Tricks',
      subtitle: 'Master Claude CLI like a pro',
      tips: [
        {
          title: 'Multi-file Editing',
          description: 'Claude can edit multiple files simultaneously',
          example: 'claude "Refactor all React components to use TypeScript"'
        },
        {
          title: 'Context Awareness',
          description: 'Claude understands your entire project structure',
          example: 'claude "Add error handling to all API calls"'
        },
        {
          title: 'Code Generation',
          description: 'Generate boilerplate code quickly',
          example: 'claude "Create a REST API with Express and TypeScript"'
        },
        {
          title: 'Testing',
          description: 'Automatically generate and run tests',
          example: 'claude "Write unit tests for all utility functions"'
        },
        {
          title: 'Debugging',
          description: 'Get help debugging complex issues',
          example: 'claude "Debug why the login function is not working"'
        },
        {
          title: 'Documentation',
          description: 'Generate comprehensive documentation',
          example: 'claude "Add JSDoc comments to all public functions"'
        }
      ]
    },
    automation: {
      title: 'Continuous Automation',
      subtitle: 'Let Claude work autonomously',
      intro: 'Claude can work continuously on complex tasks without interruption. Here\'s how to set it up:',
      features: [
        {
          title: 'Auto-approval Mode',
          description: 'Automatically approve all Claude\'s actions',
          command: 'claude --dangerously-skip-permissions',
          warning: 'Use with caution!'
        },
        {
          title: 'Task Completion',
          description: 'Claude will continue until the task is complete',
          tip: 'Be specific about completion criteria'
        },
        {
          title: 'Error Recovery',
          description: 'Claude automatically handles and recovers from errors',
          note: 'Claude will attempt to fix compilation errors, test failures, etc.'
        },
        {
          title: 'Progress Tracking',
          description: 'Claude uses todo lists to track complex tasks',
          tip: 'You can see the progress in real-time'
        }
      ],
      examples: {
        title: 'Automation Examples',
        items: [
          {
            task: 'Build a complete web app',
            command: 'claude "Build a todo app with React, TypeScript, and local storage"'
          },
          {
            task: 'Refactor entire codebase',
            command: 'claude "Convert all JavaScript files to TypeScript with proper types"'
          },
          {
            task: 'Add comprehensive testing',
            command: 'claude "Add unit tests for all components with 80% coverage"'
          }
        ]
      }
    },
    hooks: {
      title: 'Hooks & Configuration',
      subtitle: 'Customize Claude\'s behavior',
      intro: 'Hooks allow you to run custom commands before or after Claude\'s actions',
      types: [
        {
          name: 'Pre-commit Hook',
          description: 'Run before committing code',
          example: 'npm run lint && npm test'
        },
        {
          name: 'Post-edit Hook',
          description: 'Run after editing files',
          example: 'prettier --write .'
        },
        {
          name: 'Completion Sound',
          description: 'Play a sound when task completes',
          example: 'play /System/Library/Sounds/Glass.aiff',
          tip: 'Useful for long-running tasks'
        }
      ],
      config: {
        title: 'Configuration File',
        description: 'Create a .claude.json file in your project root',
        example: `{
  "hooks": {
    "pre-commit": "npm run lint",
    "post-edit": "npm run format"
  },
  "permissions": {
    "auto-approve": ["read", "write"],
    "always-ask": ["execute", "delete"]
  }
}`
      }
    },
    commands: {
      title: 'Essential Commands',
      subtitle: 'Complete command reference',
      basic: {
        title: 'Basic Commands',
        items: [
          {
            command: 'claude',
            description: 'Start an interactive session'
          },
          {
            command: 'claude "task description"',
            description: 'Execute a specific task'
          },
          {
            command: 'claude --help',
            description: 'Show help information'
          },
          {
            command: 'claude --version',
            description: 'Show version information'
          }
        ]
      },
      advanced: {
        title: 'Advanced Commands',
        items: [
          {
            command: 'claude --dangerously-skip-permissions',
            description: 'Skip all permission checks'
          },
          {
            command: 'claude --model claude-3-opus',
            description: 'Use a specific model'
          },
          {
            command: 'claude --context file.md',
            description: 'Include additional context'
          },
          {
            command: 'claude --output result.md',
            description: 'Save output to file'
          }
        ]
      },
      shortcuts: {
        title: 'Keyboard Shortcuts',
        items: [
          {
            shortcut: 'Shift + Tab',
            description: 'Toggle permission mode'
          },
          {
            shortcut: 'Ctrl + C',
            description: 'Cancel current operation'
          },
          {
            shortcut: 'Ctrl + L',
            description: 'Clear terminal'
          },
          {
            shortcut: 'Tab',
            description: 'Autocomplete commands'
          }
        ]
      }
    },
    troubleshooting: {
      title: 'Troubleshooting',
      subtitle: 'Common issues and solutions',
      issues: [
        {
          problem: 'Permission denied errors',
          solution: 'Run terminal as administrator or use sudo',
          command: 'sudo npm install -g claude'
        },
        {
          problem: 'Claude not responding',
          solution: 'Check your internet connection and API key',
          tip: 'Run claude --test to verify connection'
        },
        {
          problem: 'Files not being saved',
          solution: 'Ensure you have write permissions in the directory',
          tip: 'Check folder permissions or try a different location'
        },
        {
          problem: 'Slow performance',
          solution: 'Claude may be processing large files',
          tip: 'Use .claudeignore to exclude unnecessary files'
        },
        {
          problem: 'Unexpected behavior',
          solution: 'Clear Claude\'s context and restart',
          command: 'claude --clear-context'
        }
      ]
    }
  },
  zh: {
    nav: {
      title: 'Claude CLI 使用指南',
      installation: '安装配置',
      permissions: '权限管理',
      usage: '使用技巧',
      automation: '自动化',
      hooks: '钩子与设置',
      commands: '命令大全',
      troubleshooting: '故障排除'
    },
    common: {
      copy: '复制',
      copied: '已复制！',
      tip: '提示',
      warning: '警告',
      note: '注意',
      example: '示例'
    },
    installation: {
      title: '安装与配置',
      subtitle: '几分钟内开始使用 Claude CLI',
      requirements: '系统要求',
      requirementsList: [
        'Node.js 18 或更高版本',
        'npm 或 yarn 包管理器',
        '终端访问权限（命令提示符、PowerShell 或终端）',
        '互联网连接'
      ],
      steps: '安装步骤',
      step1: '全局安装 Claude CLI',
      step2: '使用 Claude 账户登录',
      step3: '开始使用 Claude CLI',
      firstProject: '创建第一个项目',
      projectTip: 'Claude CLI 会为你的项目创建一个新目录'
    },
    permissions: {
      title: '权限管理',
      subtitle: '控制 Claude 在系统上的操作权限',
      intro: 'Claude CLI 在执行潜在危险操作前会请求权限。你可以通过以下方式管理这些权限：',
      methods: {
        interactive: {
          title: '交互模式（默认）',
          description: 'Claude 会为每个敏感操作请求权限',
          tip: '推荐初学者使用'
        },
        skipAll: {
          title: '跳过所有权限',
          description: '危险！允许 Claude 执行任何操作而不询问',
          warning: '仅在完全信任 Claude 将执行的操作时使用'
        },
        toggle: {
          title: '会话中切换',
          description: '在会话期间按 Shift+Tab 切换权限模式',
          tip: '当你想临时跳过权限时很有用'
        }
      },
      bestPractices: '最佳实践',
      practices: [
        '批准前始终审查操作',
        '仅在受控环境中使用跳过模式',
        '生产系统启用权限',
        '执行前审查生成的代码'
      ]
    },
    usage: {
      title: '使用技巧',
      subtitle: '像专业人士一样掌握 Claude CLI',
      tips: [
        {
          title: '多文件编辑',
          description: 'Claude 可以同时编辑多个文件',
          example: 'claude "将所有 React 组件重构为 TypeScript"'
        },
        {
          title: '上下文感知',
          description: 'Claude 理解你的整个项目结构',
          example: 'claude "为所有 API 调用添加错误处理"'
        },
        {
          title: '代码生成',
          description: '快速生成样板代码',
          example: 'claude "使用 Express 和 TypeScript 创建 REST API"'
        },
        {
          title: '测试',
          description: '自动生成并运行测试',
          example: 'claude "为所有工具函数编写单元测试"'
        },
        {
          title: '调试',
          description: '获取复杂问题的调试帮助',
          example: 'claude "调试为什么登录功能不工作"'
        },
        {
          title: '文档',
          description: '生成全面的文档',
          example: 'claude "为所有公共函数添加 JSDoc 注释"'
        }
      ]
    },
    automation: {
      title: '连续自动化',
      subtitle: '让 Claude 自主工作',
      intro: 'Claude 可以在复杂任务上持续工作而不中断。以下是设置方法：',
      features: [
        {
          title: '自动批准模式',
          description: '自动批准 Claude 的所有操作',
          command: 'claude --dangerously-skip-permissions',
          warning: '谨慎使用！'
        },
        {
          title: '任务完成',
          description: 'Claude 会继续工作直到任务完成',
          tip: '要明确完成标准'
        },
        {
          title: '错误恢复',
          description: 'Claude 自动处理并从错误中恢复',
          note: 'Claude 会尝试修复编译错误、测试失败等'
        },
        {
          title: '进度跟踪',
          description: 'Claude 使用待办事项列表跟踪复杂任务',
          tip: '你可以实时查看进度'
        }
      ],
      examples: {
        title: '自动化示例',
        items: [
          {
            task: '构建完整的 Web 应用',
            command: 'claude "使用 React、TypeScript 和本地存储构建待办事项应用"'
          },
          {
            task: '重构整个代码库',
            command: 'claude "将所有 JavaScript 文件转换为带有适当类型的 TypeScript"'
          },
          {
            task: '添加全面测试',
            command: 'claude "为所有组件添加单元测试，覆盖率达到 80%"'
          }
        ]
      }
    },
    hooks: {
      title: '钩子与配置',
      subtitle: '自定义 Claude 的行为',
      intro: '钩子允许你在 Claude 操作前后运行自定义命令',
      types: [
        {
          name: '提交前钩子',
          description: '在提交代码前运行',
          example: 'npm run lint && npm test'
        },
        {
          name: '编辑后钩子',
          description: '在编辑文件后运行',
          example: 'prettier --write .'
        },
        {
          name: '完成提示音',
          description: '任务完成时播放声音',
          example: 'powershell -c (New-Object Media.SoundPlayer "C:\\Windows\\Media\\notify.wav").PlaySync()',
          tip: '对长时间运行的任务很有用'
        }
      ],
      config: {
        title: '配置文件',
        description: '在项目根目录创建 .claude.json 文件',
        example: `{
  "hooks": {
    "pre-commit": "npm run lint",
    "post-edit": "npm run format"
  },
  "permissions": {
    "auto-approve": ["read", "write"],
    "always-ask": ["execute", "delete"]
  }
}`
      }
    },
    commands: {
      title: '必备命令',
      subtitle: '完整命令参考',
      basic: {
        title: '基本命令',
        items: [
          {
            command: 'claude',
            description: '开始交互式会话'
          },
          {
            command: 'claude "任务描述"',
            description: '执行特定任务'
          },
          {
            command: 'claude --help',
            description: '显示帮助信息'
          },
          {
            command: 'claude --version',
            description: '显示版本信息'
          }
        ]
      },
      advanced: {
        title: '高级命令',
        items: [
          {
            command: 'claude --dangerously-skip-permissions',
            description: '跳过所有权限检查'
          },
          {
            command: 'claude --model claude-3-opus',
            description: '使用特定模型'
          },
          {
            command: 'claude --context file.md',
            description: '包含额外上下文'
          },
          {
            command: 'claude --output result.md',
            description: '保存输出到文件'
          }
        ]
      },
      shortcuts: {
        title: '键盘快捷键',
        items: [
          {
            shortcut: 'Shift + Tab',
            description: '切换权限模式'
          },
          {
            shortcut: 'Ctrl + C',
            description: '取消当前操作'
          },
          {
            shortcut: 'Ctrl + L',
            description: '清除终端'
          },
          {
            shortcut: 'Tab',
            description: '自动补全命令'
          }
        ]
      }
    },
    troubleshooting: {
      title: '故障排除',
      subtitle: '常见问题和解决方案',
      issues: [
        {
          problem: '权限被拒绝错误',
          solution: '以管理员身份运行终端或使用 sudo',
          command: 'sudo npm install -g claude'
        },
        {
          problem: 'Claude 没有响应',
          solution: '检查你的互联网连接和 API 密钥',
          tip: '运行 claude --test 验证连接'
        },
        {
          problem: '文件未保存',
          solution: '确保你在目录中有写入权限',
          tip: '检查文件夹权限或尝试其他位置'
        },
        {
          problem: '性能缓慢',
          solution: 'Claude 可能正在处理大文件',
          tip: '使用 .claudeignore 排除不必要的文件'
        },
        {
          problem: '意外行为',
          solution: '清除 Claude 的上下文并重新启动',
          command: 'claude --clear-context'
        }
      ]
    }
  }
};