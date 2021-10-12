import app from './app';

const listener = app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${listener.address().port}`);
});
  