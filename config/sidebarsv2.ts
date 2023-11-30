export default [
	{
		label: 'Nacos是什么?',
		translations: {
			'zh-cn': 'Nacos简介',
			'en': 'Nacos introduction'
		},
		opened: true,
		items: [
			{
				label: 'Nacos简介',
				link: 'docs/v2/what-is-nacos',
				translations: {
					'zh-cn': 'Nacos简介',
					'en': 'Nacos introduction'
				},
			},
			{
				label: '概念',
				link: 'docs/v2/concepts',
				translations: {
					'zh-cn': '概念',
					'en': 'Concepts'
				}
			},
			{
				label: '架构',
				link: 'docs/v2/architecture',
				translations: {
					'zh-cn': '架构',
					'en': 'Architecure'
				}
			},
		],
	},
	{
		label: '快速开始',
		opened: true,
		translations: {
			'zh-cn': 'Nacos简介',
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
			'zh-cn': '升级',
			'en': 'Upgrading'
		},
		items: [
			{
				label: '兼容性及使用',
				link: 'docs/v2/upgrading/compatibility',
				translations: {
					'zh-cn': '兼容性及使用',
					'en': 'Compatibility&Usage'
				},
			},
			{
				label: '升级文档',
				link: 'docs/v2/upgrading/upgrading',
				translations: {
					'zh-cn': '升级文档',
					'en': 'Upgrading'
				},
			},
		],
	},
	{
		label: '插件',
		translations: {
			'zh-cn': '插件',
			'en': 'Plugin'
		},
		items: [
			{
				label: '鉴权',
				link: 'docs/v2/plugin/auth-plugin',
				translations: {
					'zh-cn': '鉴权',
					'en': 'Authentication'
				},
			},
			{
				label: '配置加密',
				link: 'docs/v2/plugin/config-encryption-plugin',
				translations: {
					'zh-cn': '配置加密',
					'en': 'Configuration Encryption'
				},
			},
			{
				label: '数据源',
				link: 'docs/v2/plugin/datasource-plugin',
				translations: {
					'zh-cn': '数据源',
					'en': 'Datasource'
				},
			},
			{
				label: '轨迹追踪',
				link: 'docs/v2/plugin/trace-plugin',
				translations: {
					'zh-cn': '轨迹追踪',
					'en': 'Track Tracing',
				},
			},
			{
				label: '环境变量',
				link: 'docs/v2/plugin/custom-environment-plugin',
				translations: {
					'zh-cn': '环境变量',
					'en': 'Custom Environment',
				},
			},
			{
				label: '反脆弱',
				link: 'docs/v2/plugin/control-plugin',
				translations: {
					'zh-cn': '反脆弱',
					'en': 'Control',
				},
			},
			{
				label: '配置变更',
				link: 'docs/v2/plugin/config-change-plugin',
				translations: {
					'zh-cn': '配置变更',
					'en': 'Configuration Change',
				},
			},
		]
	},
	{
		label: '用户指南',
		translations: {
			'zh-cn': '用户指南',
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
					'zh-cn': '其他语言SDK',
					'en': 'Other Language'
				},
			},
			{
				label: 'Open-API指南',
				link: 'docs/v2/guide/user/open-api',
				translations: {
					'zh-cn': 'OpenAPI指南',
					'en': 'OpenAPI'
				},
			},
			{
				label: '参数校验',
				link: 'docs/v2/guide/user/parameters-check',
				translations: {
					'zh-cn': '参数校验',
					'en': 'Parameter Check'
				},
			},
			{
				label: '权限认证',
				link: 'docs/v2/guide/user/auth',
				translations: {
					'zh-cn': '权限认证',
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
			'zh-cn': '运维指南',
			'en': 'Admin Guide'
		},
		items: [
			{
				label: '部署手册',
				link: 'docs/v2/guide/admin/deployment',
				translations: {
					'zh-cn': '部署手册',
					'en': 'Deployment Guide',
				},
			},
			{
				label: '集群部署说明',
				link: 'docs/v2/guide/admin/cluster-mode-quick-start',
				translations: {
					'zh-cn': '集群部署说明',
					'en': 'Cluster Mode Deployment',
				},
			},
			{
				label: '系统参数说明',
				link: 'docs/v2/guide/admin/system-configurations',
				translations: {
					'zh-cn': '系统参数说明',
					'en': 'System Configurations',
				},
			},
			{
				label: '运维API',
				link: 'docs/v2/guide/admin/management-api',
				translations: {
					'zh-cn': '运维API',
					'en': 'Management OpenAPI',
				},
			},
			{
				label: '控制台手册',
				link: 'docs/v2/guide/admin/console-guide',
				translations: {
					'zh-cn': '控制台手册',
					'en': 'Admin Console Guide',
				},
			},
			{
				label: '监控手册',
				link: 'docs/v2/guide/admin/monitor-guide',
				translations: {
					'zh-cn': '监控手册',
					'en': 'Nacos Monitor Guide',
				},
			},
			{
				label: 'Nacos2.0配置模块压测报告',
				link: 'docs/v2/guide/admin/nacos2-config-benchmark',
				translations: {
					'zh-cn': 'Nacos配置模块压测报告',
					'en': 'Config Benchmark',
				},
			},
			{
				label: 'Nacos2.0服务发现模块压测报告',
				link: 'docs/v2/guide/admin/nacos2-naming-benchmark',
				translations: {
					'zh-cn': 'Nacos服务发现模块压测报告',
					'en': 'Naming Benchmark',
				},
			},
			{
				label: '其他环境迁移到Nacos',
				link: 'docs/v2/ecology/use-nacos-sync',
				translations: {
					'zh-cn': '其他环境迁移到Nacos',
					'en': 'Data Migration to Nacos',
				},
			},
		],
	},
	{
		label: '生态融合',
		translations: {
			'zh-cn': '生态融合',
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
			'zh-cn': '开源共建',
			'en': 'Contributor Guide',
		},
		items: [
			{
				label: '贡献源码',
				link: 'docs/v2/contribution/contributing',
				translations: {
					'zh-cn': '贡献源码',
					'en': 'Contribute to Nacos',
				},
			},
			{
				label: '贡献流程',
				link: 'docs/v2/contribution/contributing-flow',
				translations: {
					'zh-cn': '贡献流程',
					'en': 'Contributing Flow',
				},
			},
			{
				label: 'pull request模板',
				link: 'docs/v2/contribution/pull-request',
				translations: {
					'zh-cn': 'pull request模板',
					'en': 'Pull Request Template',
				},
			},
			{
				label: '如何提交问题报告',
				link: 'docs/v2/contribution/how-to-reporting-bugs',
				translations: {
					'zh-cn': '如何提交问题报告',
					'en': 'How to report bugs',
				},
			},
		],
	},
	{
		label: '社区',
		translations: {
			'zh-cn': '社区',
			'en': 'Community',
		},
		items: [
			{
				label: '社区',
				link: 'docs/v2/community/community',
				translations: {
					'zh-cn': '社区',
					'en': 'Community',
				},
			},
			{
				label: '开发团队',
				link: 'docs/v2/community/nacos-dev',
				translations: {
					'zh-cn': '开发团队',
					'en': 'Develop Team'
				},
			},
		],
	},
]