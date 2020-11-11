import app from './app';
import "@babel/polyfill"

async function main() {
<<<<<<< HEAD
    await app.listen(4000);
=======
    await app.listen(process.env.PORT || 4000);
    // await app.listen(3000);
>>>>>>> dev
    console.log('Server on port 4000');
};

main();