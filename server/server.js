const express = require('express');
const api_helper = require('./API_helper');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});
app.get('/api/1', (req, res) => {
  //?aq_480=1&a_480=true&aq_69xt=0&aq_68xt=0&aq_68=0&aq_67xt=0&aq_66xt=0&aq_vii=0&aq_5700xt=0&aq_5700=0&aq_5600xt=0&aq_vega64=0&aq_vega56=0&aq_3090=0&aq_38Ti=0&aq_3080=0&aq_38L=0&aq_37Ti=0&aq_3070=0&aq_37L=0&aq_3060Ti=0&aq_36TiL=0&aq_3060=0&aq_36L=0&aq_66=0&aq_55xt8=0&aq_580=0&aq_570=0&aq_470=0&aq_fury=0&aq_380=0&aq_a5=0&aq_a45=0&aq_a4=0&aq_a2=0&aq_2080Ti=0&aq_2080=0&aq_2070=0&aq_2060=0&aq_166s=0&aq_1660Ti=0&aq_1660=0&aq_1080Ti=0&aq_1080=0&aq_1070Ti=0&aq_1070=0&aq_10606=0&aq_1050Ti=0
  //eth=true&factor[eth_hr]=30.0&factor[eth_p]=140.0&e4g=true&factor[e4g_hr]=30.0&factor[e4g_p]=140.0&zh=true&factor[zh_hr]=21.0&factor[zh_p]=120.0&cnh=true&factor[cnh_hr]=960.0&factor[cnh_p]=110.0&cng=true&factor[cng_hr]=760.0&factor[cng_p]=120.0&cnf=true&factor[cnf_hr]=1650.0&factor[cnf_p]=110.0&cx=true&factor[cx_hr]=1.1&factor[cx_p]=120.0&eqa=true&factor[eqa_hr]=95.0&factor[eqa_p]=120.0&cc=true&factor[cc_hr]=2.6&factor[cc_p]=130.0&cr29=true&factor[cr29_hr]=2.4&factor[cr29_p]=130.0&ct31=true&factor[ct31_hr]=0.6&factor[ct31_p]=120.0&ct32=true&factor[ct32_hr]=0.16&factor[ct32_p]=120.0&eqb=true&factor[eqb_hr]=15.5&factor[eqb_p]=140.0&rmx=true&factor[rmx_hr]=470.0&factor[rmx_p]=90.0&ns=true&factor[ns_hr]=820.0&factor[ns_p]=150.0&al=true&factor[al_hr]=59.0&factor[al_p]=130.0&ops=true&factor[ops_hr]=4.9&factor[ops_p]=120.0&eqz=true&factor[eqz_hr]=14.0&factor[eqz_p]=130.0&zlh=true&factor[zlh_hr]=14.0&factor[zlh_p]=120.0&kpw=true&factor[kpw_hr]=13.0&factor[kpw_p]=170.0&ppw=true&factor[ppw_hr]=9.4&factor[ppw_p]=140.0&x25x=true&factor[x25x_hr]=0.83&factor[x25x_p]=80.0&fpw=true&factor[fpw_hr]=14.5&factor[fpw_p]=170.0&vh=true&factor[vh_hr]=0.44&factor[vh_p]=120.0&factor[cost]=0.1&factor[cost_currency]=USD&sort=Profitability24&volume=0&revenue=24h&factor[exchanges][]=&factor[exchanges][]=binance&factor[exchanges][]=bitfinex&factor[exchanges][]=bitforex&factor[exchanges][]=bittrex&factor[exchanges][]=coinex&factor[exchanges][]=dove&factor[exchanges][]=exmo&factor[exchanges][]=gate&factor[exchanges][]=graviex&factor[exchanges][]=hitbtc&factor[exchanges][]=hotbit&factor[exchanges][]=ogre&factor[exchanges][]=poloniex&factor[exchanges][]=stex

  api_helper
    .make_API_call(
      'https://whattomine.com/coins?aq_480=1&a_480=true&eth=true&factor%5Beth_hr%5D=30.0&factor%5Beth_p%5D=140.0&e4g=true&factor%5Be4g_hr%5D=30.0&factor%5Be4g_p%5D=140.0&zh=true&factor%5Bzh_hr%5D=21.0&factor%5Bzh_p%5D=120.0&cnh=true&factor%5Bcnh_hr%5D=960.0&factor%5Bcnh_p%5D=110.0&cng=true&factor%5Bcng_hr%5D=760.0&factor%5Bcng_p%5D=120.0&cnf=true&factor%5Bcnf_hr%5D=1650.0&factor%5Bcnf_p%5D=110.0&cx=true&factor%5Bcx_hr%5D=1.1&factor%5Bcx_p%5D=120.0&eqa=true&factor%5Beqa_hr%5D=95.0&factor%5Beqa_p%5D=120.0&cc=true&factor%5Bcc_hr%5D=2.6&factor%5Bcc_p%5D=130.0&cr29=true&factor%5Bcr29_hr%5D=2.4&factor%5Bcr29_p%5D=130.0&ct31=true&factor%5Bct31_hr%5D=0.6&factor%5Bct31_p%5D=120.0&ct32=true&factor%5Bct32_hr%5D=0.16&factor%5Bct32_p%5D=120.0&eqb=true&factor%5Beqb_hr%5D=15.5&factor%5Beqb_p%5D=140.0&rmx=true&factor%5Brmx_hr%5D=470.0&factor%5Brmx_p%5D=90.0&ns=true&factor%5Bns_hr%5D=820.0&factor%5Bns_p%5D=150.0&al=true&factor%5Bal_hr%5D=59.0&factor%5Bal_p%5D=130.0&ops=true&factor%5Bops_hr%5D=4.9&factor%5Bops_p%5D=120.0&eqz=true&factor%5Beqz_hr%5D=14.0&factor%5Beqz_p%5D=130.0&zlh=true&factor%5Bzlh_hr%5D=14.0&factor%5Bzlh_p%5D=120.0&kpw=true&factor%5Bkpw_hr%5D=13.0&factor%5Bkpw_p%5D=170.0&ppw=true&factor%5Bppw_hr%5D=9.4&factor%5Bppw_p%5D=140.0&x25x=true&factor%5Bx25x_hr%5D=0.83&factor%5Bx25x_p%5D=80.0&fpw=true&factor%5Bfpw_hr%5D=14.5&factor%5Bfpw_p%5D=170.0&vh=true&factor%5Bvh_hr%5D=0.44&factor%5Bvh_p%5D=120.0&factor%5Bcost%5D=0.1&factor%5Bcost_currency%5D=USD&sort=Profitability24&volume=0&revenue=24h&factor%5Bexchanges%5D%5B%5D=&factor%5Bexchanges%5D%5B%5D=binance&factor%5Bexchanges%5D%5B%5D=bitfinex&factor%5Bexchanges%5D%5B%5D=bitforex&factor%5Bexchanges%5D%5B%5D=bittrex&factor%5Bexchanges%5D%5B%5D=coinex&factor%5Bexchanges%5D%5B%5D=dove&factor%5Bexchanges%5D%5B%5D=exmo&factor%5Bexchanges%5D%5B%5D=gate&factor%5Bexchanges%5D%5B%5D=graviex&factor%5Bexchanges%5D%5B%5D=hitbtc&factor%5Bexchanges%5D%5B%5D=hotbit&factor%5Bexchanges%5D%5B%5D=ogre&factor%5Bexchanges%5D%5B%5D=poloniex&factor%5Bexchanges%5D%5B%5D=stex&dataset=Main&commit=Calculate'
    )
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
