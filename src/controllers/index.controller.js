

const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
  res.render('index');
};


indexCtrl.renderHome = (req, res) => {
  res.render('home');
};

indexCtrl.rendersem1 = (req, res) => {
  res.render('sem1');
};

indexCtrl.rendersem2 = (req, res) => {
  res.render('sem2');
};

indexCtrl.rendersem3 = (req, res) => {
  res.render('sem3');
};

indexCtrl.rendersem4 = (req, res) => {
  res.render('sem4');
};

module.exports = indexCtrl;