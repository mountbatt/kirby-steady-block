# kirby-steady-block
 Adds a Block to Kirby-CMS to enable the Steady Paywall where you want.

Technically it just adds the Steady Syntax <span>`___STEADY_PAYWALL___`</span> into the output.

Important: You have to put your own / custom Steady initialization code into `<head>` to make steady work on your site!

### Blueprint:
To use it in your block-editor you have to manually add the `steady` block to your blueprint


````
content:
  type: blocks
    fieldsets:
      - code
      - gallery
      - heading
      - image
      - line
      - list
      - markdown
      - quote
      - text
      - video
      - steady

````


### Screenshots

![Bildschirm­foto 2022-12-07 um 17 14 43](https://user-images.githubusercontent.com/2411246/206232192-abdd5b26-9dbd-4087-835d-cc4a0bb2d3de.png)

![Bildschirm­foto 2022-12-07 um 17 14 21](https://user-images.githubusercontent.com/2411246/206232212-9ea76e6b-4611-4ac2-afbe-57ff5deff7ef.png)

![Bildschirm­foto 2022-12-07 um 17 16 21](https://user-images.githubusercontent.com/2411246/206232485-86a09b68-4132-4acb-8cce-78ec15571e3e.png)
