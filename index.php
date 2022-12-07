<?php
Kirby::plugin('mountbatt/steady', [
  'blueprints' => [
    'blocks/steady' => __DIR__ . '/blueprints/blocks/steady.yml'
  ],
  'snippets' => [
    'blocks/steady' => __DIR__ . '/snippets/blocks/steady.php'
  ]
]);