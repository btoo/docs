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
          className: "doc-icon sidebar-icon",
        },
        {
          type: "category",
          label: "Quickstart Guides",
          collapsed: true,
          className: "rocket-icon sidebar-icon",
          items: [
            "guides/first-feature",
            "guides/logging-events",
            "guides/abn-tests",
          ],
        },
        {
          type: "category",
          label: "Core Concepts & Setup",
          collapsed: true,
          className: "lightbulb-icon sidebar-icon",
          items: [
            "understanding-platform",
            "guides/first-device-level-experiment",
            "guides/experiment-on-custom-id-types",
            "guides/using-environments",
            "guides/testing",
            "guides/featureflags-or-experiments",
            {
              "Enterprise Concepts": [
                "guides/experimentation-program",
                "guides/running-a-poc",
                "guides/production",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "SDKs & Frameworks",
          className: "doc-icon sidebar-icon",
          items: [
            "sdks/getting-started",
            {
              Concepts: [
                "sdks/client-vs-server",
                "client/concepts/user",
                "server/concepts/monitoring",
                "sdks/debugging",
                "client/concepts/initialize",
                "client/concepts/bootstrapping",
                "client/concepts/persistent_assignment",
                "client/concepts/parameter-stores",
                "messages/serverRequiredUserID",
                "server/concepts/user",
                "server/concepts/data_store",
                "server/concepts/forward_proxy",
                "server/concepts/persistent_assignment",
                "server/concepts/all_assignments",
                "sdk-keys/api-keys",
                "sdk-keys/target-apps",
                "server/deprecation-notices",
              ],
            },
            "client/html-snippet",
            "client/javascript-sdk",
            "client/javascript-mono/ReactUsage",
            "client/androidClientSDK",
            "client/iosClientSDK",
            "client/javascript-mono/nextjs/NextJsUsage",
            "server/nodejsServerSDK",
            {
              type: "category",
              label: "More Client SDKs",
              items: [
                "client/cpp-client-sdk",
                "client/dartSDK",
                "client/dotnetSDK",
                "client/javascript-mono/ExpoUsage",
                "client/javascript-mono/ReactNativeUsage",
                "client/javascript-mono/AngularUsage",
                "client/rokuSDK",
                "client/unitySDK",
                {
                  type: "category",
                  label: "On Device Client SDKs",
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
                    "client/deprecated/jsClientSDK",
                    "client/deprecated/reactSDK",
                    "client/deprecated/reactNativeSDK",
                    "client/deprecated/reactNativeExpoSDK",
                    "client/jsLocalEvaluationSDK",
                    "client/javascript-mono/MigrationFromOldJsClient",
                    "client/javascript-mono/MigrationFromOldReact",
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "More Server SDKs",
              items: [
                "server/dotnetSDK",
                "server/cppSDK",
                "server/erlangSDK",
                "server/golangSDK",
                "server/javaSdk",
                "server/pythonSDK",
                "server/phpSDK",
                "server/rubySDK",
                "server/rustSDK",
              ],
            },
            {
              type: "category",
              label: "Other Frameworks",
              items: [
                "guides/node-express-feature-flags",
                "guides/node-express-abtests",
                "guides/python-flask-feature-flags",
                "guides/python-flask-abtests",
              ],
            },
            {
              type: "category",
              label: "Azure AI",
              link: {
                type: "doc",
                id: "azureai/introduction",
              },
              items: [
                "azureai/getting-started",
                "azureai/model-client",
                "azureai/completions",
                "azureai/embeddings",
                "azureai/capturing-metrics",
                "azureai/running-experiments",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "APIs",
          className: "key-icon sidebar-icon",
          items: [
            "http-api",
            {
              type: "category",
              label: "Console API",
              items: [
                "console-api/introduction",
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
              items: [
                "siggy/introduction",
                "siggy/commands",
                "siggy/gate-management",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Integrations",
          className: "integrations-icon sidebar-icon",
          items: [
            "integrations/introduction",
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
          className: "data-icon sidebar-icon",
          items: [
            {
              "Metrics 101 - Overview": [
                "metrics/101",
                "metrics/how-metrics-work",
                "metrics/raw-events",
                {
                  type: "category",
                  label: "Auto-generated Metrics",
                  link: {
                    type: "doc",
                    id: "metrics/raw-event-metrics",
                  },
                  items: ["metrics/deprecate-event-dau"],
                },
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
            "metrics/custom-dau",
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
        {
          type: "doc",
          id: "faq",
          className: "question-icon sidebar-icon",
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
          className: "feature-icon sidebar-icon",
          items: [
            {
              type: "category",
              label: "Feature Flags",
              items: [
                "feature-flags/working-with",
                "feature-flags/create-new",
                "feature-flags/add-rule",
                "feature-flags/test-gate",
                "feature-flags/overrides",
                "feature-flags/scheduled-rollouts",
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
              items: [
                "dynamic-config/introduction",
                "dynamic-config/working-with",
                "dynamic-config/enforce-schema",
                "dynamic-config/create-new",
                "dynamic-config/add-rule",
                "guides/first-dynamic-config",
              ],
            },
            {
              type: "category",
              label: "Segments",
              items: [
                "segments/introduction",
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
          className: "xp-icon sidebar-icon",
          items: [
            {
              type: "category",
              label: "Experiments",
              items: [
                "experiments-plus/introduction",
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
                "experiments-plus/interaction-detection",
                "experiments-plus/stop-assignments",
                "experiments-plus/conclude-experiment-defer-decision",
                "experiments-plus/abandon",
                "experiments-plus/ending-experiment",
                "experiments-plus/disable-group",
                "experiments-plus/bayesian",
                "experiments-plus/switchback-tests",
                "experiments-plus/reconciling-experiment-results",
                // {
                //   Experimentation: [
                //     "experiments-plus/experimentation/why-experiment",
                //     "experiments-plus/experimentation/scenarios",
                //     "experiments-plus/experimentation/best-practices",
                //     "experiments-plus/experimentation/common-terms",
                //     "experiments-plus/experimentation/choosing-randomization-unit",
                //   ],
                // },
              ],
            },
            // {
            //   type: "category",
            //   label: "Autotune (Bandits)",
            //   link: {
            //     type: "doc",
            //     id: "autotune/introduction",
            //   },
            // items: [
            //   "autotune/contextual-bandit",
            //   "autotune/multi-armed-bandit",
            //   "autotune/setup",
            //   "autotune/monitoring",
            // ],
            // },
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
            "layers/introduction",
            "holdouts/introduction",
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
          ],
        },
        {
          type: "category",
          label: "Product Analytics",
          className: "chart-icon sidebar-icon",
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
          className: "web-icon sidebar-icon",
          items: ["webanalytics/overview"],
        },
        {
          type: "category",
          label: "Session Replay",
          className: "play-icon sidebar-icon",
          items: [
            "session-replay/overview",
            "session-replay/install",
            "session-replay/configure",
            "session-replay/watch",
          ],
        },
        {
          type: "category",
          label: "Warehouse Native",
          className: "whn-icon sidebar-icon",
          items: [
            "statsig-warehouse-native/introduction",
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
                  items: [
                    "statsig-warehouse-native/guides/connect",
                    "statsig-warehouse-native/connecting-your-warehouse/bigquery",
                    "statsig-warehouse-native/connecting-your-warehouse/snowflake",
                    "statsig-warehouse-native/connecting-your-warehouse/databricks",
                    "statsig-warehouse-native/connecting-your-warehouse/redshift",
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
              items: [
                "statsig-warehouse-native/configuration/data-and-semantic-layer",
                "statsig-warehouse-native/configuration/metric-sources",
                {
                  type: "category",
                  label: "Metrics",
                  items: [
                    "statsig-warehouse-native/configuration/metrics",
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
                    "statsig-warehouse-native/metrics/log",
                    "statsig-warehouse-native/metrics/latest-value",
                    "statsig-warehouse-native/metrics/retention",
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
                    // "holdouts/introduction",
                    "experiments-plus/stratified-sampling",
                    "experiments-plus/differential-impact-detection",
                    "statsig-warehouse-native/features/targeting",
                    "statsig-warehouse-native/features/id-resolution",
                    "statsig-warehouse-native/features/filtering-exposures",
                    "statsig-warehouse-native/metrics/normalized-metrics",
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
                  items: [
                    "statsig-warehouse-native/features/statistics",
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
                "statsig-warehouse-native/features/use-case",
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
      collapsible: false,
      items: [
        {
          className: "team-icon sidebar-icon",
          type: "category",
          label: "Workspace Management",
          items: [
            "access-management/introduction",
            {
              Workspace: [
                "access-management/organizations",
                "access-management/projects",
                "access-management/teams",
              ],
            },
            {
              type: "category",
              label: "Access Management",
              items: [
                {
                  "Single Sign-On": [
                    "access-management/sso/overview",
                    "access-management/sso/okta_sso",
                    "access-management/sso/azuread",
                    "access-management/sso/google",
                  ],
                },
                {
                  type: "category",
                  label: "SCIM User Provisioning",
                  items: [
                    "access-management/scim/overview",
                    "access-management/scim/concepts",
                    "access-management/scim/okta_scim",
                    "access-management/scim/scim-endpoints",
                  ],
                },
              ],
            },
          ],
        },
        {
          className: "template-icon sidebar-icon",
          type: "category",
          label: "Collaboration",
          items: [
            {
              type: "category",
              label: "Templates & Policies",
              items: [
                {
                  type: "category",
                  label: "Organization Policies",
                  link: {
                    type: "doc",
                    id: "org-admin/organization_policies",
                  },
                  items: [
                    "org-admin/experiment_policy",
                    "org-admin/gates_policy",
                  ],
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
            "access-management/discussions",
            "access-management/tags",
            "guides/setting-up-reviews",
            "guides/config-history",
          ],
        },
        {
          type: "category",
          label: "Privacy",
          className: "admin-icon sidebar-icon",
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
          label: "Infrastructure Operations",
          className: "infra-icon sidebar-icon",
          link: {
            type: "doc",
            id: "infrastructure/introduction",
          },
          items: [
            {
              "Domains & IP": [
                "infrastructure/statsig_ip_ranges",
                "infrastructure/statsig_domains",
              ],
            },
            {
              type: "category",
              label: "API Proxy",
              link: {
                type: "doc",
                id: "infrastructure/api_proxy/introduction",
              },
              items: [
                "infrastructure/api_proxy/managed-proxy",
                "infrastructure/api_proxy/custom_proxy",
              ],
            },
            {
              Reliability: ["infrastructure/reliability-faq", "guides/uptime"],
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
