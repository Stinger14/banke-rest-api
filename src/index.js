import app from './app';
import "@babel/polyfill"

async function main() {
    await app.listen(process.env.PORT || 4000);
    // await app.listen(3000);
    console.log('Server on port 4000');
};

main();