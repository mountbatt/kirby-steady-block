<?php
Kirby::plugin('mountbatt/steady', [
  'blueprints' => [
    'blocks/steady' => __DIR__ . '/blueprints/blocks/steady.yml'
  ],
  'snippets' => [
    'blocks/steady' => __DIR__ . '/snippets/blocks/steady.php'
  ],
  'translations' => [
      'en' => [
          'mountbatt.steady.blocktext' => 'The Steady Paywall begins here',
      ],
      'de' => [
          'mountbatt.steady.blocktext' => 'Die Steady Paywall beginnt hier',
      ]
  ],
]);