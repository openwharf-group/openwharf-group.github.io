export default [
	{
		label: 'Nacos是什么?',
		translations: {
			'zh-CN': 'Nacos简介',
			'en': 'Nacos introduction'
		},
		opened: true,
		items: [
			{
				label: 'Nacos简介',
				link: 'docs/v2/what-is-nacos',
				translations: {
					'zh-CN': 'Nacos简介',
					'en': 'Nacos introduction'
				},
			},
			{
				label: '概念',
				link: 'docs/v2/concepts',
				translations: {
					'zh-CN': '概念',
					'en': 'Concepts'
				}
			},
			{
				label: '架构',
				link: 'docs/v2/architecture',
				translations: {
					'zh-CN': '架构',
					'en': 'Architecure'
				}
			},
		],
	},
	{
		label: '快速开始',
		opened: true,
		translations: {
			'zh-CN': 'Nacos简介',
			'en': 'Quick Start'
		},
		items: [
			{
				label: 'Nacos',
				link: 'docs/v2/quickstart/quick-start',
			},
			{
				label: 'Nacos Docker',
				link: 'docs/v2/quickstart/quick-start-docker',
			},
			{
				label: 'Nacos kubernetes',
				link: 'docs/v2/quickstart/quick-start-kubernetes',
			},
		]
	},
	{
		label: '升级',
		translations: {
			'zh-CN': '升级',
			'en': 'Upgrading'
		},
		items: [
			{
				label: '兼容性及使用',
				link: 'docs/v2/upgrading/compatibility',
				translations: {
					'zh-CN': '兼容性及使用',
					'en': 'Compatibility&Usage'
				},
			},
			{
				label: '升级文档',
				link: 'docs/v2/upgrading/upgrading',
				translations: {
					'zh-CN': '升级文档',
					'en': 'Upgrading'
				},
			},
		],
	},
	{
		label: '插件',
		translations: {
			'zh-CN': '插件',
			'en': 'Plugin'
		},
		items: [
			{
				label: '鉴权',
				link: 'docs/v2/plugin/auth-plugin',
				translations: {
					'zh-CN': '鉴权',
					'en': 'Authentication'
				},
			},
			{
				label: '配置加密',
				link: 'docs/v2/plugin/config-encryption-plugin',
				translations: {
					'zh-CN': '配置加密',
					'en': 'Configuration Encryption'
				},
			},
			{
				label: '数据源',
				link: 'docs/v2/plugin/datasource-plugin',
				translations: {
					'zh-CN': '数据源',
					'en': 'Datasource'
				},
			},
			{
				label: '轨迹追踪',
				link: 'docs/v2/plugin/trace-plugin',
				translations: {
					'zh-CN': '轨迹追踪',
					'en': 'Track Tracing',
				},
			},
			{
				label: '环境变量',
				link: 'docs/v2/plugin/custom-environment-plugin',
				translations: {
					'zh-CN': '环境变量',
					'en': 'Custom Environment',
				},
			},
			{
				label: '反脆弱',
				link: 'docs/v2/plugin/control-plugin',
				translations: {
					'zh-CN': '反脆弱',
					'en': 'Control',
				},
			},
			{
				label: '配置变更',
				link: 'docs/v2/plugin/config-change-plugin',
				translations: {
					'zh-CN': '配置变更',
					'en': 'Configuration Change',
				},
			},
		]
	},
	{
		label: '用户指南',
		translations: {
			'zh-CN': '用户指南',
			'en': 'User Guide',
		},
		items: [
			{
				label: 'Java SDK',
				link: 'docs/v2/guide/user/sdk',
			},
			{
				label: '其他语言SDK',
				link: 'docs/v2/guide/user/other-language',
				translations: {
					'zh-CN': '其他语言SDK',
					'en': 'Other Language'
				},
			},
			{
				label: 'Open-API指南',
				link: 'docs/v2/guide/user/open-api',
				translations: {
					'zh-CN': 'OpenAPI指南',
					'en': 'OpenAPI'
				},
			},
			{
				label: '参数校验',
				link: 'docs/v2/guide/user/parameters-check',
				translations: {
					'zh-CN': '参数校验',
					'en': 'Parameter Check'
				},
			},
			{
				label: '权限认证',
				link: 'docs/v2/guide/user/auth',
				translations: {
					'zh-CN': '权限认证',
					'en': 'Authentication'
				},
			},
			{
				label: 'FAQ',
				link: 'docs/v2/guide/user/faq',
			},
			// {
			//   label: 'Java客户端容灾',
			//   link: 'docs/failover',
			// },
		],
	},
	{
		label: '运维指南',
		translations: {
			'zh-CN': '运维指南',
			'en': 'Admin Guide'
		},
		items: [
			{
				label: '部署手册',
				link: 'docs/v2/guide/admin/deployment',
				translations: {
					'zh-CN': '部署手册',
					'en': 'Deployment Guide',
				},
			},
			{
				label: '集群部署说明',
				link: 'docs/v2/guide/admin/cluster-mode-quick-start',
				translations: {
					'zh-CN': '集群部署说明',
					'en': 'Cluster Mode Deployment',
				},
			},
			{
				label: '系统参数说明',
				link: 'docs/v2/guide/admin/system-configurations',
				translations: {
					'zh-CN': '系统参数说明',
					'en': 'System Configurations',
				},
			},
			{
				label: '运维API',
				link: 'docs/v2/guide/admin/management-api',
				translations: {
					'zh-CN': '运维API',
					'en': 'Management OpenAPI',
				},
			},
			{
				label: '控制台手册',
				link: 'docs/v2/guide/admin/console-guide',
				translations: {
					'zh-CN': '控制台手册',
					'en': 'Admin Console Guide',
				},
			},
			{
				label: '监控手册',
				link: 'docs/v2/guide/admin/monitor-guide',
				translations: {
					'zh-CN': '监控手册',
					'en': 'Nacos Monitor Guide',
				},
			},
			{
				label: 'Nacos2.0配置模块压测报告',
				link: 'docs/v2/guide/admin/nacos2-config-benchmark',
				translations: {
					'zh-CN': 'Nacos配置模块压测报告',
					'en': 'Config Benchmark',
				},
			},
			{
				label: 'Nacos2.0服务发现模块压测报告',
				link: 'docs/v2/guide/admin/nacos2-naming-benchmark',
				translations: {
					'zh-CN': 'Nacos服务发现模块压测报告',
					'en': 'Naming Benchmark',
				},
			},
			{
				label: '其他环境迁移到Nacos',
				link: 'docs/v2/ecology/use-nacos-sync',
				translations: {
					'zh-CN': '其他环境迁移到Nacos',
					'en': 'Data Migration to Nacos',
				},
			},
		],
	},
	{
		label: '生态融合',
		translations: {
			'zh-CN': '生态融合',
			'en': 'Ecology',
		},
		items: [
			{
				label: 'Dubbo',
				link: 'docs/v2/ecology/use-nacos-with-dubbo',
			},
			{
				label: 'Spring',
				link: 'docs/v2/ecology/use-nacos-with-spring',
			},
			{
				label: 'Spring Boot',
				link: 'docs/v2/ecology/use-nacos-with-spring-boot',
			},
			{
				label: 'Spring Cloud',
				link: 'docs/v2/ecology/use-nacos-with-spring-cloud',
			},
			{
				label: 'Nacos Sync',
				link: 'docs/v2/ecology/use-nacos-sync',
			},
			{
				label: 'CoreDNS',
				link: 'docs/v2/ecology/use-nacos-with-coredns',
			},
		]
	},
	{
		label: '开源共建',
		translations: {
			'zh-CN': '开源共建',
			'en': 'Contributor Guide',
		},
		items: [
			{
				label: '贡献源码',
				link: 'docs/v2/contribution/contributing',
				translations: {
					'zh-CN': '贡献源码',
					'en': 'Contribute to Nacos',
				},
			},
			{
				label: '贡献流程',
				link: 'docs/v2/contribution/contributing-flow',
				translations: {
					'zh-CN': '贡献流程',
					'en': 'Contributing Flow',
				},
			},
			{
				label: 'pull request模板',
				link: 'docs/v2/contribution/pull-request',
				translations: {
					'zh-CN': 'pull request模板',
					'en': 'Pull Request Template',
				},
			},
			{
				label: '如何提交问题报告',
				link: 'docs/v2/contribution/how-to-reporting-bugs',
				translations: {
					'zh-CN': '如何提交问题报告',
					'en': 'How to report bugs',
				},
			},
		],
	},
	{
		label: '社区',
		translations: {
			'zh-CN': '社区',
			'en': 'Community',
		},
		items: [
			{
				label: '社区',
				link: 'docs/v2/community/community',
				translations: {
					'zh-CN': '社区',
					'en': 'Community',
				},
			},
			{
				label: '开发团队',
				link: 'docs/v2/community/nacos-dev',
				translations: {
					'zh-CN': '开发团队',
					'en': 'Develop Team'
				},
			},
		],
	},
]