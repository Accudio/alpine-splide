const esbuild = require( 'esbuild' );

async function build( src, opts ) {
  const name = `alpine-splide.${ opts.name }.js`;

  console.log( `Building ${ name }` );

  return esbuild.build( {
    entryPoints: [ `./src/js/${ src }` ],
    bundle     : true,
    outfile    : `./dist/js/${ name }`,
    format     : opts.format || 'esm',
    minify     : opts.minify || true,
    target     : [ 'es2019' ],
  } );
}

async function buildAll() {
  return Promise.all( [
    build( 'script.js', { name: 'script' } ),
    build( 'module.js', { name: 'esm' } ),
    build( 'module.js', { name: 'cjs', format: 'cjs', minify: false } ),
  ] );
}

buildAll().catch( e => console.error( e ) );

exports.buildAll = buildAll;
