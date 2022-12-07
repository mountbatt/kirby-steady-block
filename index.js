panel.plugin("mountbatt/steady", {
  icons: {
    'steady-icon': '<path d="M5.5427,0.000233333333 C6.97976667,0.0120466667 8.20816667,0.47212 9.23343333,1.38046667 C9.85956667,1.9352 10.2970333,2.56826667 10.5457667,3.27966667 L7.79016667,4.12513333 C7.69823333,3.78 7.4951,3.47266667 7.1809,3.20313333 C6.75336667,2.83626667 6.2093,2.646 5.5427,2.63233333 C5.52323333,2.63206667 5.5003,2.63153333 5.48063333,2.63153333 C4.7785,2.63153333 4.20536667,2.82206667 3.76123333,3.20313333 C3.31703333,3.5842 3.09496667,4.04073333 3.09496667,4.5728 C3.09496667,5.50746667 3.64656667,6.08266667 4.7499,6.2984 C5.10216667,6.3672 5.36616667,6.41853333 5.54183333,6.45233333 L5.54183333,6.4518 C5.81483333,6.50486667 6.22436667,6.5718 6.77043333,6.65253333 C8.12023333,6.9146 9.1685,7.4606 9.91516667,8.29053333 C10.6619,9.1204 11.0352333,10.0959333 11.0352333,11.2170667 C11.0352333,12.4983333 10.5362333,13.6158 9.53823333,14.5694667 C8.54023333,15.5231333 7.22276667,16 5.5427,16 C3.86263333,16 2.54516667,15.5231333 1.54716667,14.5694667 C0.9593,14.0077333 0.544566667,13.3891333 0.302966667,12.7136667 L3.11376667,11.8506667 C3.20023333,12.2216667 3.40316667,12.5346667 3.72263333,12.7895333 C4.16056667,13.139 4.7673,13.3136667 5.5427,13.3136667 C6.3181,13.3136667 6.92483333,13.139 7.36276667,12.7895333 C7.80076667,12.4400667 8.01976667,11.9814667 8.01976667,11.4136 C8.01976667,10.9622667 7.85816667,10.5728 7.5351,10.2452 C7.21203333,9.9176 6.7561,9.69553333 6.16736667,9.57906667 C5.88976667,9.5222 5.68156667,9.47953333 5.5427,9.45113333 L5.5427,9.45193333 C5.2333,9.3892 4.76843333,9.29426667 4.1481,9.16713333 C2.91583333,8.90833333 1.9415,8.39786667 1.2251,7.63573333 C0.5087,6.8736 0.1505,5.92453333 0.1505,4.78846667 C0.1505,3.4368 0.669833333,2.3008 1.7087,1.38046667 C2.7475,0.460153333 3.99763333,-1.77635684e-15 5.4591,-1.77635684e-15 C5.4861,-1.77635684e-15 5.5159,-1.77635684e-15 5.5427,0.000346666667 L5.5427,0.000233333333 Z" id="Path"></path>'
  },
  blocks: {
    steady: `
      <div>
        <center><img class="steady-logo" src="../media/plugins/mountbatt/steady/steady_icon_white_in_purple.svg"> {{ $t('mountbatt.steady.blocktext') }} &nbsp; &darr;</center>
      </div>
    `
  }
});
