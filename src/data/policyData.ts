/**
 * @file policyData.ts
 * @description Static content for the OptFor-EU Policy Visualization.
 *
 * The single authoritative source for all text, URLs, and map positions.
 * Content updates require edits here only — no component files need to change.
 *
 * Data source: OptFor-EU D5.2 report and official EU policy documentation.
 */

import { CentralNodeContent, PolicyDomain } from '../types/policy';

/**
 * Content driving the central hub button on the map and the modal it opens.
 *
 * @remarks
 * The `connectedDomains` labels must mirror the `title` values in {@link policyData}.
 * Update both if a domain title changes.
 */
export const centralNodeContent: CentralNodeContent = {
  title: 'Forest Ecosystem-\nResilience Strategies',
  description:
    "Forest Ecosystem-Resilience Strategies represents the central hub connecting all major EU policy areas affecting forest management. This integrated approach recognizes that forests are key in Europe's fight against climate change, absorbing twice as much carbon as they emit each year.",
  objectives: [
    'Integrate multiple policy areas for coherent forest management',
    'Support climate adaptation and mitigation through sustainable forestry',
    'Balance biodiversity conservation with economic utilization',
    'Enable evidence-based decision-making for forest managers',
  ],
  strategies: [
    'Mapping of relevant policy goals and regulations',
    'Development of decision support systems (DSS)',
    'Collaboration with forest managers and stakeholders',
    'Monitoring and reporting of forest status',
  ],
  connectedDomains: [
    'Forest-focused',
    'Environmental',
    'Climate',
    'Energy',
    'Agricultural',
    'Research',
    'Value Chain',
  ],
} as const;

/**
 * The seven EU policy domain boxes displayed on the interactive map.
 *
 * Positions are percentage-based coordinates relative to the map container (0–100).
 * Adjust `position` values here to reflow the layout — no CSS changes required.
 *
 * Approximate layout:
 * ```
 *      Environmental (37,22)      Climate (65,20)
 * Forest (20,40)      [CENTER (50,50)]      Energy (78,40)
 *    Agricultural (20,70)               Value Chain (80,70)
 *                   Research (50,80)
 * ```
 */
export const policyData: readonly PolicyDomain[] = [

  {
    id: 'forest-focused',
    title: 'Forest-focused Policy',
    description:
      'Forest-focused policy has remained largely at the competence level of EU member states. It covers monitoring, certification, prevention of illegal logging, afforestation, protective forests and close-to-nature forestry practices.',
    position: { x: 20, y: 40 },
    goals: [
      {
        title: 'Monitoring & Certification Schemes',
        description:
          'Support and strengthen forest monitoring and certification to ensure sustainable management practices.',
        url: 'https://environment.ec.europa.eu/topics/forests_en',
      },
      {
        title: 'Prevention of Illegal Logging',
        description:
          'Combat illegal logging and associated trade through regulation and enforcement.',
        url: 'https://environment.ec.europa.eu/topics/forests/deforestation/regulation-deforestation-free-products_en',
      },
      {
        title: 'Close-to-Nature Forestry',
        description:
          'Promote forest management practices that maintain natural forest processes and biodiversity.',
        url: 'https://environment.ec.europa.eu/strategy/forest-strategy_en',
      },
      {
        title: 'Afforestation & Protective Forests',
        description:
          'Increase forest cover through afforestation and protect forests with key ecological functions.',
        url: 'https://environment.ec.europa.eu/strategy/forest-strategy_en',
      },
    ],
    documents: [
      {
        title: 'EU Forest Strategy for 2030',
        description:
          'Sets a vision and concrete actions to improve the quantity and quality of EU forests.',
        url: 'https://environment.ec.europa.eu/strategy/forest-strategy_en',
      },
      {
        title: 'Forest Action Plan 2007–2011',
        description:
          'Framework for forest-related actions at EU and member-state level.',
        url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52006DC0302',
      },
      {
        title: 'EU Timber Regulation (EUTR)',
        description:
          'Prohibits placing illegally harvested timber on the EU market.',
        url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32010R0995',
      },
    ],
  },

  {
    id: 'environmental',
    title: 'Environmental Policy',
    description:
      'EU environmental policy relating to forests focuses on plant protection, maintenance of biodiversity and forest protection through directives, programmes and international conventions.',
    position: { x: 37, y: 22 },
    goals: [
      {
        title: 'Plant Protection',
        description:
          'Protect plant health to maintain forest ecosystem integrity and prevent the spread of pests.',
        url: 'https://food.ec.europa.eu/plants/plant-health-and-biosecurity_en',
      },
      {
        title: 'Maintenance of Biodiversity',
        description:
          'Conserve and restore biodiversity within forest ecosystems across Europe.',
        url: 'https://environment.ec.europa.eu/strategy/biodiversity-strategy-2030_en',
      },
      {
        title: 'Forest Protection',
        description:
          'Ensure protection of forests through the Natura 2000 network and habitat directives.',
        url: 'https://environment.ec.europa.eu/topics/nature-and-biodiversity/natura-2000_en',
      },
    ],
    documents: [
      {
        title: 'EU Biodiversity Strategy for 2030',
        description:
          'Comprehensive plan to protect nature and reverse ecosystem degradation.',
        url: 'https://environment.ec.europa.eu/strategy/biodiversity-strategy-2030_en',
      },
      {
        title: 'Natura 2000 Directives',
        description:
          'Birds Directive and Habitats Directive forming the cornerstone of EU nature protection.',
        url: 'https://environment.ec.europa.eu/topics/nature-and-biodiversity/natura-2000_en',
      },
      {
        title: '8th Environment Action Programme',
        description:
          'Guides European environment policy through 2030 with a climate-neutrality objective.',
        url: 'https://environment.ec.europa.eu/strategy/environment-action-programme-2030_en',
      },
    ],
  },

  {
    id: 'climate',
    title: 'Climate Policy',
    description:
      "Climate policy targets greenhouse gas emission reduction, carbon sequestration in forests, and support for adaptation strategies. Forests play a central role in the EU's climate neutrality ambitions through the LULUCF regulation.",
    position: { x: 65, y: 20 },
    goals: [
      {
        title: 'Carbon Sequestration',
        description:
          'Enhance the carbon removal capacity of forests through sustainable management and restoration.',
        url: 'https://climate.ec.europa.eu/eu-action/land-use-sector_en',
      },
      {
        title: 'Climate Adaptation',
        description:
          'Build resilience of forest ecosystems to climate change impacts through adaptive management.',
        url: 'https://climate.ec.europa.eu/eu-action/adaptation-climate-change_en',
      },
      {
        title: 'Emission Reduction',
        description:
          'Reduce greenhouse gas emissions from land use and forestry sectors in line with EU targets.',
        url: 'https://climate.ec.europa.eu/eu-action/european-climate-law_en',
      },
    ],
    documents: [
      {
        title: 'European Climate Law',
        description:
          "Enshrines the EU's commitment to reaching climate neutrality by 2050.",
        url: 'https://climate.ec.europa.eu/eu-action/european-climate-law_en',
      },
      {
        title: 'LULUCF Regulation',
        description:
          'Rules for accounting greenhouse gas emissions and removals from land use and forestry.',
        url: 'https://climate.ec.europa.eu/eu-action/land-use-sector_en',
      },
      {
        title: 'EU Adaptation Strategy',
        description:
          'Framework for climate-proofing the EU, including forest ecosystem resilience.',
        url: 'https://climate.ec.europa.eu/eu-action/adaptation-climate-change/eu-adaptation-strategy_en',
      },
    ],
  },

  {
    id: 'energy',
    title: 'Energy Policy',
    description:
      'Energy policy connects to forests through renewable energy from biomass, bioenergy sustainability criteria and the transition away from fossil fuels. Forest biomass is a key component of EU renewable energy targets.',
    position: { x: 78, y: 40 },
    goals: [
      {
        title: 'Renewable Energy from Biomass',
        description:
          'Promote sustainable use of forest biomass for renewable energy production.',
        url: 'https://energy.ec.europa.eu/topics/renewable-energy/bioenergy_en',
      },
      {
        title: 'Sustainable Bioenergy',
        description:
          'Ensure bioenergy sustainability criteria protect forest carbon stocks and biodiversity.',
        url: 'https://energy.ec.europa.eu/topics/renewable-energy/bioenergy/sustainability-criteria_en',
      },
      {
        title: 'Carbon Certification for Forest Products',
        description:
          'Develop carbon certification frameworks for forest-based energy products.',
        url: 'https://climate.ec.europa.eu/eu-action/sustainable-carbon-cycles/carbon-removal-certification_en',
      },
    ],
    documents: [
      {
        title: 'Renewable Energy Directive (RED III)',
        description:
          'Sets binding renewable energy targets including sustainability criteria for biomass.',
        url: 'https://energy.ec.europa.eu/topics/renewable-energy/renewable-energy-directive-targets-and-rules_en',
      },
      {
        title: 'REPowerEU Plan',
        description:
          'Plan to rapidly reduce dependence on Russian fossil fuels, including via sustainable biomass.',
        url: 'https://commission.europa.eu/strategy-and-policy/priorities-2019-2024/european-green-deal/repowereu-affordable-secure-and-sustainable-energy-europe_en',
      },
    ],
    
  },

  {
    id: 'agricultural',
    title: 'Agricultural Policy',
    description:
      'Agricultural policy (EU CAP) affects forests through rural development funds, afforestation support, food security measures and management of coupled lands. It is a key funding mechanism for forest-related actions.',
    position: { x: 20, y: 70 },
    goals: [
      {
        title: 'Regional & Rural Development',
        description:
          'Support rural areas and forest communities through CAP rural development programmes.',
        url: 'https://agriculture.ec.europa.eu/common-agricultural-policy/rural-development_en',
      },
      {
        title: 'Afforestation Support',
        description:
          'Provide financial incentives for afforestation and forest restoration through CAP measures.',
        url: 'https://agriculture.ec.europa.eu/common-agricultural-policy_en',
      },
      {
        title: 'Food Security & Coupled Lands',
        description:
          'Balance food production needs with forest conservation and sustainable land management.',
        url: 'https://agriculture.ec.europa.eu/common-agricultural-policy/cap-overview_en',
      },
    ],
    documents: [
      {
        title: 'CAP Strategic Plan Regulation (2021)',
        description:
          'Rules for member-state strategic plans under the reformed Common Agricultural Policy.',
        url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021R2115',
      },
      {
        title: 'CAP Horizontal Regulation (2021)',
        description:
          'Financing, management and monitoring framework for the Common Agricultural Policy.',
        url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021R2116',
      },
    ],
  },

  {
    id: 'value-chain',
    title: 'Value Chain & Wood Industry',
    description:
      'Value chain policy addresses circular bioeconomy, sustainable taxonomy, life cycle analysis and end-use measures for forest products from cradle to cradle. It supports clean industry and sustainable production.',
    position: { x: 80, y: 70 },
    goals: [
      {
        title: 'Enhancing Circular Bioeconomy',
        description:
          'Promote circular use of forest products and the transition to a bio-based economy.',
        url: 'https://research-and-innovation.ec.europa.eu/research-area/environment/bioeconomy_en',
      },
      {
        title: 'Sustainable Taxonomy',
        description:
          'Develop and apply EU taxonomy criteria for sustainable forest-based investments.',
        url: 'https://finance.ec.europa.eu/sustainable-finance/tools-and-standards/eu-taxonomy-sustainable-activities_en',
      },
      {
        title: 'Life Cycle Analysis',
        description:
          'Support LCA methodologies for measuring the environmental impact of forest products.',
        url: 'https://eplca.jrc.ec.europa.eu/',
      },
    ],
    documents: [
      {
        title: 'EU Taxonomy Regulation (2020)',
        description:
          'Classification system establishing criteria for environmentally sustainable economic activities.',
        url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32020R0852',
      },
      {
        title: 'EU Bioeconomy Strategy',
        description:
          'Strategy for a sustainable bioeconomy transitioning from fossil to renewable biological resources.',
        url: 'https://research-and-innovation.ec.europa.eu/research-area/environment/bioeconomy/bioeconomy-strategy_en',
      },
    ],
  },

  {
    id: 'research',
    title: 'Forest Research & Development Policy',
    description:
      'Research policy supports innovation, training programmes and the development of new technologies for sustainable forest management. It funds projects that advance climate-smart forestry and biodiversity conservation.',
    position: { x: 50, y: 80 },
    goals: [
      {
        title: 'Innovation & Research Programmes',
        description:
          'Fund research advancing sustainable forest management, climate adaptation and new technologies.',
        url: 'https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe_en',
      },
      {
        title: 'Technology Development',
        description:
          'Support development of innovative tools for forest monitoring, management and decision-making.',
        url: 'https://eic.ec.europa.eu/index_en',
      },
      {
        title: 'Sustainable Resource Use Research',
        description:
          'Research on sustainable use of forest resources and prevention of environmental damage.',
        url: 'https://research-and-innovation.ec.europa.eu/research-area/environment_en',
      },
    ],
    documents: [
      {
        title: 'Horizon Europe Programme (2021–2027)',
        description:
          'EU flagship research and innovation programme with a €95.5 billion budget.',
        url: 'https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe_en',
      },
      {
        title: 'COST Actions',
        description:
          'Networking initiatives supporting research in sustainable materials and climate-smart forestry.',
        url: 'https://www.cost.eu/',
      },
      {
        title: 'EU Innovation Fund',
        description:
          'Fund for innovative low-carbon technologies including forest-based solutions.',
        url: 'https://climate.ec.europa.eu/eu-action/eu-funding-climate-action/innovation-fund_en',
      },
    ],
  },

] as const;