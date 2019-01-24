//snippet de piano online - Ode à alegria
// autor: Kaio F Prates 23-01-2019
//site:  https://virtualpiano.net/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function tocar() {
    //primeira parte
    //baixo do
    piano.music('a49');
    //
    piano.music('a85');
    await sleep(500);
    piano.music('a85');
    await sleep(500);
    piano.music('a73');
    await sleep(500);
    piano.music('a79');
    await sleep(500);
    // baixo sol
    piano.music('a53');
    piano.music('a79');
    await sleep(500);
    piano.music('a73');
    await sleep(500);
    piano.music('a85');
    await sleep(500);
    piano.music('a89');
    await sleep(600);
    //segunda parte
    //baixo do
    piano.music('a49');
    //
    piano.music('a84');
    await sleep(500);
    piano.music('a84');
    await sleep(500);
    piano.music('a89');
    await sleep(500);
    piano.music('a85');
    await sleep(500);
    // baixo sol
    piano.music('a53');
    piano.music('a85');
    await sleep(600);
    piano.music('a89');
    await sleep(500);
    piano.music('a89');
    await sleep(500);
    //primeira parte
    //baixo do
    piano.music('a49');
    //
    piano.music('a85');
    await sleep(500);
    piano.music('a85');
    await sleep(500);
    piano.music('a73');
    await sleep(500);
    piano.music('a79');
    await sleep(500);
    // baixo sol
    piano.music('a53');
    piano.music('a79');
    await sleep(500);
    piano.music('a73');
    await sleep(500);
    piano.music('a85');
    await sleep(500);
    piano.music('a89');
    await sleep(600);
    //terceira parte
    //baixo do
    piano.music('a49');
    //
    piano.music('a84');
    await sleep(500);
    piano.music('a84');
    await sleep(500);
    piano.music('a89');
    await sleep(500);
    piano.music('a85');
    await sleep(500);
    // baixo sol
    piano.music('a53');
    piano.music('a89');
    await sleep(600);
    piano.music('a84');
    await sleep(500);
    //baixo do
    piano.music('a49');
    //
    piano.music('a84');
    await sleep(600);

}
tocar()