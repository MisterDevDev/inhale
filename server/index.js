const app = require('./app');

const init = async() => {
  try {
    const port = process.env.PORT || 8080;
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  }
  catch(err) {
    console.log(err);
  }
}

init();