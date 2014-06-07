// Generated by CoffeeScript 1.7.1
var imgs, name, nextimg, position, previmg, tot;

imgs = ['<img src="../img/portrait/armin.jpg" id="armin">', '<img src="../img/portrait/daniel.jpg" id="daniel">', '<img src="../img/portrait/dave.jpg" id="dave">', '<img src="../img/portrait/david.jpg" id="david">', '<img src="../img/portrait/jannis.jpg" id="jannis">', '<img src="../img/portrait/dickens.jpg" id="dickens"> ', '<img src="../img/portrait/tobias.jpg" id="tobias">', '<img src="../img/portrait/haron.jpg" id="haron">', '<img src="../img/portrait/urs.jpg" id="urs">', '<img src="../img/portrait/liz.jpg" id="liz">', '<img src="../img/portrait/zach.jpg" id="zach">'];

position = {
  "armin": 0,
  "daniel": 1,
  "dave": 2,
  "david": 3,
  "jannis": 4,
  "dickens": 5,
  "tobias": 6,
  "haron": 7,
  "urs": 8,
  "liz": 9,
  "zach": 10
};

name = {
  0: "armin",
  1: "daniel",
  2: "dave",
  3: "david",
  4: "jannis",
  5: "dickens",
  6: "tobias",
  7: "haron",
  8: "urs",
  9: "liz",
  10: "zach"
};

tot = 11;

nextimg = function(num) {
  var next;
  next = num + 9;
  if (next > 10) {
    next -= 11;
    return next;
  } else {
    return next;
  }
};

previmg = function(num) {
  var prev;
  prev = num - 3;
  if (prev < 0) {
    prev += 11;
    return prev;
  } else {
    return prev;
  }
};

$(document).ready(function() {
  $('#next-statement').click(function() {
    var current, id;
    current = $(this).parent().parent().find('.current');
    id = $('#portraits').find('.focus').attr('id');
    if (position[id] === 10) {
      current.removeClass('current').parent().children('article').first().addClass('current');
    } else {
      current.removeClass('current').next().addClass('current');
    }
    $('#portraits').children().first().remove();
    $('#portraits').find('.focus').removeClass('focus').next().addClass('focus');
    return $('#portraits').append(imgs[nextimg(position[id])]);
  });
  $('#prev-statemet').click(function() {
    var current, id;
    current = $(this).parent().parent().find('.current');
    id = $('#portraits').find('.focus').attr('id');
    if (position[id] === 0) {
      current.removeClass('current').parent().children('article').last().addClass('current');
    } else {
      current.removeClass('current').prev().addClass('current');
    }
    $('#portraits').prepend(imgs[previmg(position[id])]);
    $('#portraits').find('.focus').removeClass('focus').prev().addClass('focus');
    return $('#portraits').children().last().remove();
  });
  return $('#portraits').on('click', 'img', function() {
    var current, id_delta, id_focus, id_focus_num, id_num, id_nums, id_this, id_this_num, _i, _j, _k, _l, _len, _results, _results1, _results2, _results3;
    current = $(this).parent().parent().parent().find('.current');
    id_focus = $('#portraits').find('.focus').attr('id');
    id_this = $(this).attr('id');
    id_delta = position[id_this] - position[id_focus];
    if (id_delta === -1 || id_delta === 10) {
      current.removeClass('current').parent().find('#' + id_this + '-statement').addClass('current');
      $('#portraits').prepend(imgs[previmg(position[id_focus])]);
      $('#portraits').children().last().remove();
      return $('#portraits').find('.focus').removeClass('focus').prev().addClass('focus');
    } else if (id_delta !== 0) {
      current.removeClass('current').parent().find('#' + id_this + '-statement').addClass('current');
      $('#portraits').find('.focus').removeClass('focus').parent().find('#' + id_this).addClass('focus');
      id_this_num = position[id_this];
      id_focus_num = position[id_focus];
      if (id_this_num > id_focus_num) {
        id_nums = (function() {
          _results = [];
          for (var _i = id_focus_num; id_focus_num <= id_this_num ? _i < id_this_num : _i > id_this_num; id_focus_num <= id_this_num ? _i++ : _i--){ _results.push(_i); }
          return _results;
        }).apply(this);
      } else {
        id_nums = (function() {
          _results2 = [];
          for (var _k = id_focus_num; id_focus_num <= 10 ? _k <= 10 : _k >= 10; id_focus_num <= 10 ? _k++ : _k--){ _results2.push(_k); }
          return _results2;
        }).apply(this).concat((function() {
          _results1 = [];
          for (var _j = 0; 0 <= id_this_num ? _j < id_this_num : _j > id_this_num; 0 <= id_this_num ? _j++ : _j--){ _results1.push(_j); }
          return _results1;
        }).apply(this));
      }
      _results3 = [];
      for (_l = 0, _len = id_nums.length; _l < _len; _l++) {
        id_num = id_nums[_l];
        $('#portraits').append(imgs[nextimg(id_num)]);
        _results3.push($('#portraits').children().first().remove());
      }
      return _results3;
    }
  });
});
