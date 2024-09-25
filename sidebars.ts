import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  cloud: [
    {
      type: "category",
      label: "New to Statsig?",
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: "doc",
          id: "getting-started",
          label: "Overview",
        },
        {
          type: "category",
          label: "Platform & Concepts",
          collapsed: true,
          items: [
            "understanding-platform",

            "guides/first-device-level-experiment",
            "guides/experiment-on-custom-id-types",
            "guides/using-environments",
            "guides/testing",
            {
              "Beginner's Guides": [
                "guides/first-feature",
                "guides/logging-events",
                "guides/abn-tests",
              ],
            },
            "guides/featureflags-or-experiments",
            {
              "Enterprise Concepts": [
                "guides/experimentation-program",
                "guides/running-a-poc",
                "guides/production",
              ],
            },
            {
              type: "doc",
              id: "faq",
            },
            // {
            //   type: "category",
            //   label: "Developer Guides",
            //   link: {
            //     type: "generated-index",
            //     title: "Developer Guides",
            //   },
            //   items: [
            //     {
            //       type: "autogenerated",
            //       dirName: "developer-guides",
            //     },
            //   ],
            // },
          ],
        },
        {
          type: "category",
          label: "SDKs & APIs",
          items: [
            "sdks/getting-started",
            {
              type: "category",
              label: "Client SDKs",
              link: {
                type: "doc",
                id: "client/introduction",
              },
              items: [
                {
                  type: "category",
                  label: "JavaScript/React",
                  items: [
                    "client/javascript-sdk",
                    "client/javascript-mono/ReactUsage",
                    "client/javascript-mono/ReactNativeUsage",
                    "client/javascript-mono/ExpoUsage",
                    "client/javascript-mono/NextJsAppRouterUsage",
                    "client/javascript-mono/NextJsPageRouterUsage",
                    "client/javascript-mono/UsingEvaluationsDataAdapter",
                    "client/javascript-mono/InitStrategies",
                    "client/javascript-mono/Examples",
                    "client/javascript-mono/MigrationFromOldJsClient",
                    "client/javascript-mono/MigrationFromOldReact",
                  ],
                },
                "client/iosClientSDK",
                "client/androidClientSDK",
                "client/dotnetSDK",
                "client/rokuSDK",
                "client/unitySDK",
                "client/dartSDK",
                "client/cpp-client-sdk",
                {
                  type: "category",
                  label: "On Device Evaluation",
                  items: [
                    {
                      type: "category",
                      label: "JavaScript",
                      link: {
                        type: "doc",
                        id: "client/js-on-device-eval-client",
                      },
                      items: [
                        "client/js-device-eval-mono/MigrationFromOldSDK",
                        "client/js-device-eval-mono/UsingSpecsDataAdapter",
                        "client/js-device-eval-mono/ReactNativeUsage",
                      ],
                    },
                    "client/swiftOnDeviceEvaluationSDK",
                    "client/androidOnDeviceEvaluationSDK",
                  ],
                },
                {
                  type: "category",
                  label: "JavaScript - Maintainance Mode",
                  items: [
                    "client/jsClientSDK",
                    "client/reactSDK",
                    "client/reactNativeSDK",
                    "client/reactNativeExpoSDK",
                    "client/jsLocalEvaluationSDK",
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Server SDKs",
              link: {
                type: "doc",
                id: "server/introduction",
              },
              items: [
                {
                  type: "category",
                  label: "Node.JS",
                  link: {
                    type: "doc",
                    id: "server/nodejsServerSDK",
                  },
                  items: [
                    "server/nodejsServerSDK",
                    "guides/node-express-feature-flags",
                    "guides/node-express-abtests",
                  ],
                },
                "server/javaSdk",
                {
                  type: "category",
                  label: "Python",
                  link: {
                    type: "doc",
                    id: "server/pythonSDK",
                  },
                  items: [
                    "server/pythonSDK",
                    "guides/python-flask-feature-flags",
                    "guides/python-flask-abtests",
                  ],
                },

                "server/golangSDK",
                "server/rubySDK",
                "server/dotnetSDK",
                "server/phpSDK",
                "server/erlangSDK",
                "server/rustSDK",
                "server/cppSDK",
                "server/deprecation-notices",
              ],
            },
            {
              Concepts: [
                "client/concepts/user",
                "sdks/debugging",
                "client/concepts/initialize",
                "client/concepts/bootstrapping",
                "client/concepts/persistent_assignment",
                "client/concepts/parameter-stores",
                "messages/serverRequiredUserID",
                "server/concepts/data_store",
                "server/concepts/forward_proxy",
                "server/concepts/persistent_assignment",
                "server/concepts/all_assignments",
                "sdk-keys/api-keys",
                "sdk-keys/target-apps",
              ],
            },
            "http-api",
            {
              type: "category",
              label: "Console API",
              link: {
                type: "doc",
                id: "console-api/introduction",
              },
              items: [
                "console-api/autogenerated",
                "console-api/gates",
                "console-api/segments",
                "console-api/dynamic-configs",
                "console-api/experiments",
                "console-api/holdouts",
                "console-api/layers",
                "console-api/users",
                "console-api/metrics",
                "console-api/audit-logs",
                "console-api/exposure-count",
                "console-api/autotunes",
                "console-api/target-apps",
                "console-api/ingestions",
                "console-api/tags",
                "console-api/keys",
                {
                  Reports: [
                    "console-api/daily-reports",
                    "console-api/daily-reports-deprecated",
                  ],
                },
                "console-api/usage-billing",
                "console-api/rules",
              ],
            },
            {
              type: "category",
              label: "Statsig CLI",
              link: {
                type: "doc",
                id: "siggy/introduction",
              },
              items: ["siggy/commands", "siggy/gate-management"],
            },
          ],
        },
        {
          type: "category",
          label: "Integrations",
          link: {
            type: "doc",
            id: "integrations/introduction",
          },
          items: [
            {
              "Data Into Statsig": [
                {
                  "Data Connectors": [
                    "integrations/data-connectors/census",
                    "integrations/data-connectors/google-analytics",
                    "integrations/data-connectors/fivetran",
                    "integrations/data-connectors/heap",
                    "integrations/data-connectors/hightouch",
                    "integrations/data-connectors/mparticle",
                    "integrations/data-connectors/revenuecat",
                    "integrations/data-connectors/segment",
                    "integrations/data-connectors/rudderstack",
                    "integrations/data-connectors/stitch",
                    "integrations/data-connectors/mixpanel",
                    "integrations/data-connectors/amplitude",
                  ],
                },
                {
                  type: "category",
                  label: "Warehouse Ingestion",
                  link: {
                    type: "doc",
                    id: "data-warehouse-ingestion/introduction",
                  },
                  items: [
                    {
                      "Connection Set Up": [
                        "data-warehouse-ingestion/bigquery",
                        "data-warehouse-ingestion/redshift",
                        "data-warehouse-ingestion/snowflake",
                        "data-warehouse-ingestion/databricks",
                        "data-warehouse-ingestion/synapse",
                        "data-warehouse-ingestion/s3",
                        "data-warehouse-ingestion/athena",
                        "data-warehouse-ingestion/faq",
                      ],
                    },
                    "data-warehouse-ingestion/data_mapping",
                  ],
                },
                "integrations/gtm",
                "integrations/event_filtering",
                "integrations/event_webhook",
                "integrations/openai",
                {
                  type: "category",
                  label: "Migrate from LaunchDarkly",
                  link: {
                    type: "doc",
                    id: "guides/migrate-from-launchdarkly",
                  },
                  items: ["guides/open-source-script", "guides/ui-based-tool"],
                },

                {
                  "Data Imports (Deprecated)": [
                    "integrations/data-imports/overview-deprecated",
                    "integrations/data-imports/bigquery-deprecated",
                    "integrations/data-imports/redshift-deprecated",
                    "integrations/data-imports/snowflake-deprecated",
                    "integrations/data-imports/azure_upload-deprecated",
                  ],
                },
              ],
            },

            {
              "Data Exports": ["integrations/data-exports/overview"],
            },
            {
              "Serverless & Edge": [
                "guides/serverless",
                "guides/cdn-edge-testing",
                "integrations/vercel",
                "integrations/cloudflare",
                "integrations/fastly",
              ],
            },
            {
              "Slack, VS Code & Productivity": [
                "integrations/github_code_references",
                "integrations/slack",
                "integrations/jira",
                "integrations/vscode",
              ],
            },
            {
              "Email & CMS Systems": [
                "guides/sendgrid-email-abtest",
                "guides/customer-io-email-abtest",
                "guides/email-campaign-test",
                "guides/cms-integrations",
              ],
            },
            {
              "No-Code Editors": [
                "guides/shopify-ab-test",
                "guides/framer-analytics",
                "guides/webflow-sidecar-ab-test",
              ],
            },
            {
              "Observability & Infra": [
                "integrations/datadog",
                {
                  type: "category",
                  label: "Terraform",
                  link: {
                    type: "doc",
                    id: "integrations/terraform/introduction",
                  },
                  items: [
                    "integrations/terraform/terraform_gate",
                    "integrations/terraform/terraform_experiment",
                  ],
                },
                {
                  type: "category",
                  label: "Datadog Triggers",
                  link: {
                    type: "doc",
                    id: "integrations/triggers/introduction",
                  },
                  items: ["integrations/triggers/datadog"],
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Data & Metrics",
          items: [
            {
              "Metrics 101 - Overview": [
                "metrics/101",
                "metrics/how-metrics-work",
                "metrics/raw-events",
                "metrics/raw-event-metrics",
                "metrics/custom-metrics",
                "metrics/precomputed-metrics",
                "metrics/user-dimensions",
                "metrics/metric-dimensions",
              ],
            },
            // other
            "metrics/ingest",
            "metrics/pulse",
            "metrics/local-metrics",
            "metrics/console",
            "metrics/health-checks",

            // 201
            "metrics/create",
            "metrics/archiving-metrics",
            "metrics/create-metric-tags",
            "metrics/metric-alerts",
            "metrics/user",

            // 301
            "metrics/create-user-funnels",
            "metrics/verified",
            "metrics/autogenerated",
            "guides/statsig-id-resolver",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Products",
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: "category",
          label: "Feature Flags",
          items: [
            {
              type: "category",
              label: "Feature Flags",
              link: {
                type: "doc",
                id: "feature-flags/working-with",
              },
              items: [
                "feature-flags/create-new",
                "feature-flags/add-rule",
                "feature-flags/test-gate",
                "feature-flags/overrides",
                "feature-flags/scheduled-rollouts",
                {
                  Implement: [
                    "feature-flags/implement",
                    "feature-flags/implement/client",
                    "feature-flags/implement/server",
                    "feature-flags/implement/http-api",
                  ],
                },
                "feature-flags/conditions",
                "feature-flags/view-exposures",
                "feature-flags/feature-flags-lifecycle",
                "feature-flags/permanent-and-stale-gates",
                "feature-flags/best-practices",
              ],
            },
            {
              type: "category",
              label: "Dynamic Config",
              link: {
                type: "doc",
                id: "dynamic-config/introduction",
              },
              items: [
                "guides/first-dynamic-config",
                "dynamic-config/working-with",
                "dynamic-config/enforce-schema",
                "dynamic-config/create-new",
                "dynamic-config/add-rule",
              ],
            },
            {
              type: "category",
              label: "Segments",
              link: {
                type: "doc",
                id: "segments/introduction",
              },
              items: [
                "segments/create-new",
                "segments/add-rule",
                "segments/add-id-list",
                "segments/use-segment",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Experimentation",
          items: [
            {
              type: "category",
              label: "Experiments",
              link: {
                type: "doc",
                id: "experiments-plus/introduction",
              },
              items: [
                "experiments-plus/working-with",
                "experiments-plus/create-new",
                "experiments-plus/power-analysis",
                "experiments-plus/implement",
                "experiments-plus/rules",
                "experiments-plus/getting-group",
                "experiments-plus/monitor",
                "experiments-plus/read-results",
                "experiments-plus/sequential-testing",
                "experiments-plus/make-decision",
                "experiments-plus/overrides",
                "experiments-plus/stratified-sampling",
                "experiments-plus/differential-impact-detection",
                "experiments-plus/stop-assignments",
                "experiments-plus/abandon",
                "experiments-plus/ending-experiment",
                "experiments-plus/disable-group",
                "experiments-plus/bayesian",
                "experiments-plus/switchback-tests",
                {
                  Experimentation: [
                    "experiments-plus/experimentation/why-experiment",
                    "experiments-plus/experimentation/scenarios",
                    "experiments-plus/experimentation/best-practices",
                    "experiments-plus/experimentation/common-terms",
                    "experiments-plus/experimentation/choosing-randomization-unit",
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Autotune (Bandits)",
              link: {
                type: "doc",
                id: "autotune/introduction",
              },
              items: [
                "autotune/contextual-bandit",
                "autotune/multi-armed-bandit",
                "autotune/setup",
                "autotune/monitoring",
              ],
            },
            {
              type: "category",
              label: "Stats Engine",
              link: {
                type: "doc",
                id: "stats-engine/introduction",
              },
              items: [
                "stats-engine/metric-deltas",
                "stats-engine/variance",
                "stats-engine/confidence-intervals",
                "stats-engine/p-value",
                "stats-engine/topline-impact",
                "stats-engine/variance-reduction",
                "guides/aa-test",
                "stats-engine/offlineaa",
                "stats-engine/pre-experiment-bias",
                {
                  "Methodologies Used": [
                    "stats-engine/methodologies/bonferroni-correction",
                    "stats-engine/methodologies/benjamini–hochberg-procedure",
                    "stats-engine/methodologies/cuped",
                    "stats-engine/methodologies/delta-method",
                    "stats-engine/methodologies/srm-checks",
                    "stats-engine/methodologies/winsorization",
                    "stats-engine/methodologies/one-sided-test",
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Layers",
              link: {
                type: "doc",
                id: "layers/introduction",
              },
              items: ["layers/js-tutorial"],
            },
            {
              type: "category",
              label: "Landing Page Experiments (deprecated)",
              items: [
                "guides/landing-page-experiments/introduction",
                "guides/landing-page-experiments/setup",
                "guides/landing-page-experiments/interpreting",
                "guides/landing-page-experiments/layers",
                "guides/landing-page-experiments/webflow",
              ],
            },
            {
              type: "category",
              label: "Low-code Experiments",
              items: [
                "guides/sidecar-experiments/introduction",
                "guides/sidecar-experiments/setup",
                "guides/sidecar-experiments/creating-experiments",
                "guides/sidecar-experiments/measuring-experiments",
                "guides/sidecar-experiments/publishing-experiments",
                "guides/sidecar-experiments/integrating-gtm",
                "guides/aa-sidecar",
              ],
            },
            "holdouts/introduction",
            {
              type: "category",
              label: "Pulse",
              link: {
                type: "doc",
                id: "pulse/introduction",
              },
              items: [
                "pulse/read-pulse",
                "pulse/drill-down",
                "pulse/custom-queries",
                "pulse/export",
                "pulse/best-practices",
                "pulse/faq",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Product Analytics",
          items: [
            "product-analytics/overview",
            {
              type: "category",
              label: "Metric Explorer",
              items: [
                "product-analytics/drilldown",
                "product-analytics/funnels",
                "product-analytics/retention",
                "product-analytics/distribution",
                "product-analytics/user-journeys",
              ],
            },
            "product-analytics/dashboards",
            "users/introduction",
            "insights/introduction",
          ],
        },
        {
          type: "category",
          label: "Web Analytics",
          items: ["webanalytics/overview"],
        },
        {
          type: "category",
          label: "Session Replay",
          items: [
            "session-replay/overview",
            "session-replay/install",
            "session-replay/configure",
            "session-replay/watch",
          ],
        },
        {
          type: "category",
          label: "AI/ML",
          items: [
            "ai-ml/ai-prompt-experiment",
            {
              type: "category",
              label: "Autotune (Bandits)",
              link: {
                type: "doc",
                id: "autotune/introduction",
              },
              items: [
                "autotune/contextual-bandit",
                "autotune/multi-armed-bandit",
                "autotune/setup",
                "autotune/monitoring",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Warehouse Native",
          link: {
            type: "doc",
            id: "statsig-warehouse-native/introduction",
          },
          items: [
            {
              type: "category",
              label: "Guides",
              items: [
                "statsig-warehouse-native/guides/quick-start",
                "statsig-warehouse-native/guides/running_a_poc",
                "statsig-warehouse-native/guides/playground_eval",
                "statsig-warehouse-native/guides/sdks",
                "statsig-warehouse-native/guides/aatest",
                "metrics/different-id",
                {
                  type: "category",
                  label: "Debugging",
                  items: [
                    "statsig-warehouse-native/guides/checklist",
                    "statsig-warehouse-native/guides/debugging",
                    "statsig-warehouse-native/guides/sql",
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Warehouse Integration",
              items: [
                {
                  type: "category",
                  label: "Connect Your Warehouse",
                  link: {
                    type: "doc",
                    id: "statsig-warehouse-native/guides/connect",
                  },
                  items: [
                    "statsig-warehouse-native/connecting-your-warehouse/bigquery",
                    "statsig-warehouse-native/connecting-your-warehouse/snowflake",
                    "statsig-warehouse-native/connecting-your-warehouse/databricks",
                    "statsig-warehouse-native/connecting-your-warehouse/redshift",
                    "statsig-warehouse-native/connecting-your-warehouse/athena",
                  ],
                },
                "statsig-warehouse-native/connecting-your-warehouse/forwarded-data",
                "statsig-warehouse-native/analysis-tools/data-privacy",
                "statsig-warehouse-native/guides/best-practices",
              ],
            },
            {
              type: "category",
              label: "Data & Semantic Layer",
              link: {
                type: "doc",
                id: "statsig-warehouse-native/configuration/data-and-semantic-layer",
              },
              items: [
                "statsig-warehouse-native/configuration/metric-sources",
                {
                  type: "category",
                  label: "Metrics",
                  link: {
                    type: "doc",
                    id: "statsig-warehouse-native/configuration/metrics",
                  },
                  items: [
                    "statsig-warehouse-native/metrics/sum",
                    "statsig-warehouse-native/metrics/count",
                    "statsig-warehouse-native/metrics/count-distinct",
                    "statsig-warehouse-native/metrics/unit-count-once",
                    "statsig-warehouse-native/metrics/unit-count-window",
                    "statsig-warehouse-native/metrics/unit-count-latest",
                    "statsig-warehouse-native/metrics/unit-count-rate",
                    "statsig-warehouse-native/metrics/mean",
                    "statsig-warehouse-native/metrics/ratio",
                    "statsig-warehouse-native/metrics/funnel",
                    "statsig-warehouse-native/metrics/percentile",
                  ],
                },
                "statsig-warehouse-native/configuration/dimensional-analysis",
                "statsig-warehouse-native/configuration/assignment-sources",
                "statsig-warehouse-native/configuration/entity-properties",
                "statsig-warehouse-native/configuration/qualifying-events",
                "statsig-warehouse-native/configuration/tags-and-teams",
                "metrics/verified",
                "statsig-warehouse-native/configuration/query-tools",
                {
                  type: "category",
                  label: "Programmatic Management",
                  items: [
                    "statsig-warehouse-native/configuration/console-api",
                    "statsig-warehouse-native/configuration/semantic-layer-sync",
                  ],
                },
                "statsig-warehouse-native/features/roles-and-access",
              ],
            },
            {
              type: "category",
              label: "Experiment Analysis",
              items: [
                {
                  type: "category",
                  label: "Setup",
                  items: [
                    "statsig-warehouse-native/features/configure-an-experiment",
                    "statsig-warehouse-native/features/types-of-experiments",
                    "statsig-warehouse-native/features/power-analysis",
                    "holdouts/introduction",
                    "experiments-plus/stratified-sampling",
                    "experiments-plus/differential-impact-detection",
                    "statsig-warehouse-native/features/targeting",
                    "statsig-warehouse-native/features/filtering-exposures",
                  ],
                },
                {
                  type: "category",
                  label: "Loading Results",
                  link: {
                    type: "doc",
                    id: "statsig-warehouse-native/features/reloads",
                  },
                  items: [
                    "statsig-warehouse-native/features/full-reloads",
                    "statsig-warehouse-native/features/incremental-reloads",
                    "statsig-warehouse-native/features/metric-reloads",
                    "statsig-warehouse-native/connecting-your-warehouse/scheduled-reloads",
                    "statsig-warehouse-native/analysis-tools/pipeline-overview",
                    "statsig-warehouse-native/features/freshness",
                  ],
                },
                {
                  type: "category",
                  label: "Interpreting Results",
                  items: [
                    "pulse/read-pulse",
                    "pulse/drill-down",
                    "pulse/custom-queries",
                    "pulse/export",
                    "pulse/best-practices",
                    "pulse/faq",
                    "statsig-warehouse-native/features/monitor-an-experiment",
                  ],
                },
                {
                  type: "category",
                  label: "Statistics",
                  link: {
                    type: "doc",
                    id: "statsig-warehouse-native/features/statistics",
                  },
                  items: [
                    "stats-engine/metric-deltas",
                    "stats-engine/variance",
                    "stats-engine/confidence-intervals",
                    "stats-engine/p-value",
                    "stats-engine/topline-impact",
                    "stats-engine/variance-reduction",
                    // "stats-engine/offlineaa",
                    "stats-engine/pre-experiment-bias",
                    {
                      "Methodologies Used": [
                        "stats-engine/methodologies/bonferroni-correction",
                        "stats-engine/methodologies/benjamini–hochberg-procedure",
                        "stats-engine/methodologies/cuped",
                        "stats-engine/methodologies/delta-method",
                        "stats-engine/methodologies/srm-checks",
                        "stats-engine/methodologies/winsorization",
                        "stats-engine/methodologies/one-sided-test",
                      ],
                    },
                  ],
                },
                "experiments/meta-analysis",
                "statsig-warehouse-native/features/reports",
                "statsig-warehouse-native/features/autotune",
              ],
            },
            "statsig-warehouse-native/features/mex-on-warehouse-native",
            "statsig-warehouse-native/features/other-useful-features",
            "statsig-warehouse-native/native-vs-cloud",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Management & Admin",
      collapsed: false,
      items: [
        {
          "Templates & Policies": [
            {
              type: "category",
              label: "Organization Policies",
              link: {
                type: "doc",
                id: "org-admin/organization_policies",
              },
              items: ["org-admin/experiment_policy", "org-admin/gates_policy"],
            },
            {
              type: "category",
              label: "Templates",
              link: {
                type: "doc",
                id: "templates/templates",
              },
              items: [],
            },
          ],
        },
        {
          "Team/Access Management": [
            "access-management/organizations",
            "access-management/projects",
            "access-management/teams",
            "access-management/discussions",
            "access-management/tags",
            "guides/setting-up-reviews",
            {
              "Single Sign-On": [
                "access-management/sso/overview",
                "access-management/sso/okta_sso",
                "access-management/sso/azuread",
                "access-management/sso/google",
              ],
            },
            "guides/config-history",
          ],
        },
        {
          type: "category",
          label: "Privacy",
          link: {
            type: "doc",
            id: "compliance/introduction",
          },
          items: [
            "compliance/user_data_deletion_requests",
            "guides/private-attributes",
          ],
        },
        {
          type: "category",
          label: "Networking & Reliability",
          link: {
            type: "doc",
            id: "infrastructure/introduction",
          },
          items: [
            "infrastructure/statsig_ip_ranges",
            "infrastructure/statsig_domains",
            "infrastructure/managed-proxy",
            "infrastructure/custom_proxy",
            "infrastructure/reliability-faq",
            "guides/uptime",
          ],
        },
      ],
    },
  ],
};

export default sidebars;
