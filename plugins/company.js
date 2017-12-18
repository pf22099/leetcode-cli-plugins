var Plugin = require('../plugin');

// [prerequisite]
//
// [config]
//
var plugin = new Plugin(100, 'company', '2017.12.18',
    'Plugin to query by company for free user.');

// NOTE: those data is collected from different websites that has similar questions:
// * careercup.com
// * lintcode.com
// * 1point3acres.com
// * other results from google search
var DATA = {
    '1': ['adobe', 'airbnb', 'amazon', 'apple', 'bloomberg', 'dropbox', 'facebook', 'linkedin', 'microsoft', 'uber', 'yahoo', 'yelp'],
    '2': ['adobe', 'airbnb', 'amazon', 'bloomberg', 'microsoft'],
    '3': ['adobe', 'amazon', 'bloomberg', 'yelp'],
    '4': ['adobe', 'apple', 'dropbox', 'google', 'microsoft', 'yahoo', 'zenefits'],
    '5': ['amazon', 'bloomberg', 'microsoft'],
    '7': ['apple', 'bloomberg'],
    '8': ['amazon', 'bloomberg', 'microsoft', 'uber'],
    '10': ['airbnb', 'facebook', 'google', 'twitter', 'uber'],
    '11': ['bloomberg'],
    '12': ['twitter'],
    '13': ['bloomberg', 'facebook', 'microsoft', 'uber', 'yahoo'],
    '14': ['yelp'],
    '15': ['adobe', 'amazon', 'bloomberg', 'facebook', 'microsoft'],
    '16': ['bloomberg'],
    '17': ['amazon', 'dropbox', 'facebook', 'google', 'uber'],
    '18': ['linkedin'],
    '20': ['airbnb', 'amazon', 'bloomberg', 'facebook', 'google', 'microsoft', 'twitter', 'zenefits'],
    '21': ['amazon', 'apple', 'linkedin', 'microsoft'],
    '22': ['google', 'uber', 'zenefits'],
    '23': ['airbnb', 'amazon', 'facebook', 'google', 'linkedin', 'microsoft', 'twitter', 'uber'],
    '24': ['bloomberg', 'microsoft', 'uber'],
    '25': ['facebook', 'microsoft'],
    '26': ['bloomberg', 'facebook', 'microsoft'],
    '28': ['apple', 'facebook', 'microsoft', 'pocketgems'],
    '31': ['google'],
    '33': ['bloomberg', 'facebook', 'linkedin', 'microsoft', 'uber'],
    '34': ['linkedin'],
    '36': ['apple', 'snapchat', 'uber'],
    '37': ['snapchat', 'uber'],
    '38': ['facebook'],
    '39': ['snapchat', 'uber'],
    '40': ['snapchat'],
    '42': ['amazon', 'apple', 'bloomberg', 'google', 'twitter', 'zenefits'],
    '43': ['facebook', 'twitter'],
    '44': ['facebook', 'google', 'snapchat', 'twitter', 'twosigma'],
    '46': ['linkedin', 'microsoft'],
    '47': ['linkedin', 'microsoft'],
    '48': ['amazon', 'apple', 'microsoft'],
    '49': ['amazon', 'bloomberg', 'facebook', 'uber', 'yelp'],
    '50': ['bloomberg', 'facebook', 'google', 'linkedin'],
    '52': ['zenefits'],
    '53': ['bloomberg', 'linkedin', 'microsoft'],
    '54': ['google', 'microsoft', 'uber'],
    '55': ['microsoft'],
    '56': ['bloomberg', 'facebook', 'google', 'linkedin', 'microsoft', 'twitter', 'yelp'],
    '57': ['facebook', 'google', 'linkedin'],
    '60': ['twitter'],
    '62': ['bloomberg'],
    '63': ['bloomberg'],
    '65': ['linkedin'],
    '66': ['google'],
    '67': ['facebook'],
    '68': ['airbnb', 'facebook', 'linkedin'],
    '69': ['apple', 'bloomberg', 'facebook'],
    '70': ['adobe', 'apple'],
    '71': ['facebook', 'microsoft'],
    '73': ['amazon', 'microsoft'],
    '75': ['facebook', 'microsoft', 'pocketgems'],
    '76': ['facebook', 'linkedin', 'snapchat', 'uber'],
    '78': ['amazon', 'bloomberg', 'facebook', 'uber'],
    '79': ['bloomberg', 'facebook', 'microsoft'],
    '80': ['facebook'],
    '85': ['facebook'],
    '88': ['bloomberg', 'facebook', 'microsoft'],
    '89': ['amazon'],
    '90': ['facebook'],
    '91': ['facebook', 'microsoft', 'uber'],
    '94': ['microsoft'],
    '96': ['snapchat'],
    '98': ['amazon', 'bloomberg', 'facebook', 'microsoft'],
    '100': ['bloomberg'],
    '101': ['bloomberg', 'linkedin', 'microsoft'],
    '102': ['amazon', 'apple', 'bloomberg', 'facebook', 'linkedin', 'microsoft'],
    '103': ['bloomberg', 'linkedin', 'microsoft'],
    '104': ['apple', 'linkedin', 'uber', 'yahoo'],
    '105': ['bloomberg'],
    '106': ['microsoft'],
    '108': ['airbnb'],
    '109': ['zenefits'],
    '110': ['bloomberg'],
    '112': ['microsoft'],
    '113': ['bloomberg'],
    '114': ['microsoft'],
    '116': ['microsoft'],
    '117': ['bloomberg', 'facebook', 'microsoft'],
    '118': ['apple', 'twitter'],
    '119': ['amazon'],
    '121': ['amazon', 'bloomberg', 'facebook', 'microsoft', 'uber'],
    '122': ['bloomberg'],
    '124': ['baidu', 'microsoft'],
    '125': ['facebook', 'microsoft', 'uber', 'zenefits'],
    '126': ['amazon', 'yelp'],
    '127': ['amazon', 'facebook', 'linkedin', 'snapchat', 'yelp'],
    '128': ['facebook', 'google'],
    '131': ['bloomberg'],
    '133': ['facebook', 'google', 'pocketgems', 'uber'],
    '136': ['airbnb', 'palantir'],
    '138': ['amazon', 'bloomberg', 'microsoft', 'uber'],
    '139': ['amazon', 'bloomberg', 'facebook', 'google', 'pocketgems', 'uber', 'yahoo'],
    '140': ['dropbox', 'google', 'snapchat', 'twitter', 'uber'],
    '141': ['amazon', 'bloomberg', 'microsoft', 'yahoo'],
    '146': ['amazon', 'bloomberg', 'facebook', 'google', 'microsoft', 'palantir', 'snapchat', 'twitter', 'uber', 'yahoo', 'zenefits'],
    '149': ['apple', 'linkedin', 'twitter'],
    '150': ['linkedin'],
    '151': ['apple', 'bloomberg', 'microsoft', 'snapchat', 'yelp'],
    '152': ['linkedin'],
    '153': ['microsoft'],
    '155': ['amazon', 'bloomberg', 'google', 'snapchat', 'uber', 'zenefits'],
    '156': ['linkedin'],
    '157': ['facebook'],
    '158': ['bloomberg', 'facebook', 'google'],
    '159': ['google'],
    '160': ['airbnb', 'amazon', 'bloomberg', 'microsoft'],
    '161': ['facebook', 'snapchat', 'twitter', 'uber'],
    '162': ['google', 'microsoft'],
    '163': ['google'],
    '165': ['apple', 'microsoft'],
    '166': ['google'],
    '167': ['amazon'],
    '168': ['facebook', 'microsoft', 'zenefits'],
    '169': ['adobe', 'zenefits'],
    '170': ['linkedin'],
    '171': ['microsoft', 'uber'],
    '172': ['bloomberg'],
    '173': ['facebook', 'google', 'linkedin', 'microsoft'],
    '174': ['microsoft'],
    '186': ['amazon', 'microsoft', 'uber'],
    '187': ['linkedin'],
    '189': ['amazon', 'bloomberg', 'microsoft'],
    '190': ['airbnb', 'apple'],
    '191': ['apple', 'microsoft'],
    '195': ['adobe'],
    '198': ['airbnb', 'linkedin'],
    '199': ['amazon'],
    '200': ['amazon', 'facebook', 'google', 'microsoft', 'zenefits'],
    '202': ['airbnb', 'twitter', 'uber'],
    '204': ['amazon', 'microsoft'],
    '205': ['linkedin'],
    '206': ['adobe', 'amazon', 'apple', 'bloomberg', 'facebook', 'microsoft', 'snapchat', 'twitter', 'uber', 'yahoo', 'yelp', 'zenefits'],
    '207': ['apple', 'uber', 'yelp', 'zenefits'],
    '208': ['bloomberg', 'facebook', 'google', 'microsoft', 'twitter', 'uber'],
    '209': ['facebook'],
    '210': ['facebook', 'zenefits'],
    '211': ['facebook'],
    '212': ['airbnb', 'google', 'microsoft'],
    '213': ['microsoft'],
    '214': ['google', 'pocketgems'],
    '215': ['amazon', 'apple', 'bloomberg', 'facebook', 'microsoft', 'pocketgems'],
    '217': ['airbnb', 'palantir', 'yahoo'],
    '218': ['facebook', 'google', 'microsoft', 'twitter', 'yelp'],
    '219': ['airbnb', 'palantir'],
    '220': ['airbnb', 'palantir'],
    '221': ['airbnb', 'apple', 'facebook'],
    '224': ['google'],
    '225': ['bloomberg'],
    '227': ['airbnb'],
    '228': ['google'],
    '229': ['zenefits'],
    '230': ['bloomberg', 'google', 'uber'],
    '231': ['google'],
    '232': ['bloomberg', 'microsoft'],
    '234': ['amazon', 'facebook'],
    '235': ['amazon', 'facebook', 'microsoft', 'twitter'],
    '236': ['amazon', 'apple', 'facebook', 'linkedin', 'microsoft'],
    '237': ['adobe', 'apple', 'microsoft'],
    '238': ['amazon', 'apple', 'facebook', 'linkedin', 'microsoft'],
    '239': ['amazon', 'google', 'zenefits'],
    '240': ['amazon', 'apple', 'google'],
    '242': ['amazon', 'uber', 'yelp'],
    '243': ['linkedin'],
    '244': ['linkedin'],
    '245': ['linkedin'],
    '246': ['google'],
    '247': ['google'],
    '249': ['google', 'uber'],
    '251': ['airbnb', 'google', 'twitter', 'zenefits'],
    '252': ['facebook'],
    '253': ['facebook', 'google', 'snapchat'],
    '254': ['linkedin', 'uber'],
    '255': ['zenefits'],
    '256': ['linkedin'],
    '257': ['apple', 'facebook', 'google'],
    '258': ['adobe', 'microsoft'],
    '259': ['google'],
    '261': ['facebook', 'google', 'zenefits'],
    '262': ['uber'],
    '265': ['facebook'],
    '266': ['bloomberg', 'google', 'uber'],
    '268': ['bloomberg', 'microsoft'],
    '269': ['airbnb', 'facebook', 'google', 'pocketgems', 'snapchat', 'twitter'],
    '270': ['google', 'microsoft', 'snapchat'],
    '271': ['google'],
    '272': ['google'],
    '273': ['facebook', 'microsoft'],
    '274': ['bloomberg', 'facebook', 'google'],
    '275': ['facebook'],
    '276': ['google'],
    '277': ['facebook', 'linkedin'],
    '278': ['facebook'],
    '279': ['google'],
    '280': ['google'],
    '281': ['google'],
    '282': ['facebook', 'google'],
    '283': ['bloomberg', 'facebook'],
    '284': ['apple', 'google', 'yahoo'],
    '285': ['facebook', 'microsoft', 'pocketgems'],
    '286': ['facebook', 'google'],
    '287': ['bloomberg'],
    '288': ['google'],
    '289': ['dropbox', 'google', 'snapchat', 'twosigma'],
    '290': ['dropbox', 'uber'],
    '291': ['dropbox', 'uber'],
    '292': ['adobe'],
    '293': ['google'],
    '294': ['google'],
    '295': ['google'],
    '296': ['twitter'],
    '297': ['amazon', 'bloomberg', 'facebook', 'google', 'linkedin', 'microsoft', 'uber', 'yahoo'],
    '298': ['google'],
    '300': ['microsoft'],
    '301': ['facebook'],
    '302': ['google'],
    '303': ['palantir'],
    '305': ['google'],
    '308': ['google'],
    '309': ['google'],
    '310': ['google'],
    '311': ['facebook', 'linkedin'],
    '312': ['google', 'snapchat'],
    '313': ['google'],
    '314': ['facebook', 'google', 'snapchat'],
    '315': ['google'],
    '316': ['google'],
    '317': ['google', 'zenefits'],
    '318': ['google'],
    '320': ['google'],
    '321': ['google'],
    '323': ['google', 'twitter'],
    '324': ['google'],
    '325': ['facebook', 'palantir'],
    '326': ['google'],
    '327': ['google'],
    '329': ['google'],
    '330': ['google'],
    '331': ['google'],
    '332': ['google'],
    '333': ['microsoft'],
    '334': ['facebook'],
    '336': ['airbnb', 'google'],
    '337': ['uber'],
    '339': ['linkedin'],
    '340': ['google'],
    '341': ['facebook', 'google', 'twitter'],
    '342': ['twosigma'],
    '345': ['google'],
    '346': ['google'],
    '347': ['pocketgems', 'yelp'],
    '348': ['google', 'microsoft'],
    '349': ['twosigma'],
    '351': ['google'],
    '353': ['google'],
    '354': ['google'],
    '355': ['amazon', 'twitter'],
    '356': ['google'],
    '357': ['google'],
    '358': ['google'],
    '359': ['google'],
    '360': ['google'],
    '361': ['google'],
    '362': ['dropbox', 'google'],
    '363': ['google'],
    '364': ['linkedin'],
    '365': ['microsoft'],
    '366': ['linkedin'],
    '367': ['linkedin'],
    '368': ['google'],
    '369': ['google'],
    '370': ['google'],
    '373': ['google', 'uber'],
    '374': ['google'],
    '375': ['google'],
    '377': ['facebook', 'google', 'snapchat'],
    '378': ['google', 'twitter'],
    '379': ['google'],
    '380': ['amazon', 'facebook', 'google', 'pocketgems', 'twitter', 'uber', 'yelp'],
    '381': ['yelp'],
    '382': ['google'],
    '383': ['apple'],
    '385': ['airbnb'],
    '386': ['bloomberg'],
    '387': ['amazon', 'bloomberg', 'microsoft'],
    '388': ['google'],
    '389': ['google'],
    '391': ['google'],
    '393': ['google'],
    '394': ['google'],
    '395': ['baidu'],
    '396': ['amazon'],
    '397': ['baidu', 'google'],
    '398': ['facebook'],
    '399': ['google'],
    '400': ['google'],
    '401': ['google'],
    '402': ['google', 'snapchat'],
    '403': ['snapchat'],
    '404': ['facebook'],
    '406': ['google'],
    '407': ['google', 'twitter'],
    '408': ['google'],
    '409': ['google'],
    '410': ['baidu', 'facebook'],
    '411': ['google'],
    '413': ['baidu'],
    '414': ['amazon'],
    '415': ['airbnb', 'google'],
    '416': ['ebay'],
    '417': ['google'],
    '418': ['google'],
    '419': ['microsoft'],
    '421': ['google'],
    '422': ['google'],
    '424': ['pocketgems'],
    '425': ['google'],
    '432': ['uber'],
    '433': ['twitter'],
    '438': ['amazon'],
    '439': ['snapchat'],
    '442': ['pocketgems'],
    '443': ['bloomberg', 'microsoft'],
    '444': ['google'],
    '445': ['bloomberg', 'microsoft'],
    '446': ['baidu'],
    '447': ['google'],
    '448': ['google'],
    '449': ['amazon'],
    '450': ['uber'],
    '451': ['amazon', 'google'],
    '452': ['microsoft'],
    '453': ['indeed'],
    '459': ['amazon', 'google'],
    '460': ['amazon', 'google'],
    '461': ['facebook'],
    '463': ['google'],
    '464': ['linkedin'],
    '465': ['google'],
    '468': ['twitter'],
    '469': ['google'],
    '471': ['google'],
    '474': ['google'],
    '475': ['google'],
    '477': ['facebook'],
    '479': ['yahoo'],
    '480': ['google'],
    '481': ['google'],
    '482': ['google'],
    '483': ['google'],
    '484': ['google'],
    '485': ['google'],
    '486': ['google'],
    '487': ['google'],
    '488': ['baidu'],
    '490': ['google'],
    '491': ['yahoo'],
    '493': ['google'],
    '494': ['facebook', 'google'],
    '498': ['google'],
    '500': ['mathworks'],
    '501': ['google'],
    '503': ['google'],
    '505': ['google'],
    '506': ['google'],
    '508': ['amazon'],
    '513': ['microsoft'],
    '514': ['google'],
    '515': ['linkedin'],
    '516': ['amazon', 'uber'],
    '517': ['amazon'],
    '520': ['google'],
    '521': ['google'],
    '522': ['google'],
    '523': ['facebook'],
    '524': ['google'],
    '525': ['facebook'],
    '526': ['google'],
    '527': ['google', 'snapchat'],
    '529': ['amazon'],
    '530': ['google'],
    '531': ['google'],
    '532': ['amazon'],
    '533': ['google'],
    '534': ['amazon', 'facebook', 'google', 'uber'],
    '535': ['amazon', 'facebook', 'google', 'uber'],
    '536': ['amazon'],
    '537': ['amazon'],
    '538': ['amazon'],
    '541': ['google'],
    '542': ['google'],
    '543': ['facebook', 'google'],
    '544': ['google'],
    '545': ['amazon', 'google'],
    '547': ['bloomberg', 'twosigma'],
    '548': ['alibaba'],
    '549': ['google'],
    '551': ['google'],
    '552': ['google'],
    '553': ['amazon'],
    '554': ['facebook'],
    '555': ['alibaba'],
    '556': ['bloomberg'],
    '557': ['zappos'],
    '560': ['google'],
    '562': ['google'],
    '563': ['indeed'],
    '564': ['yelp'],
    '566': ['mathworks'],
    '567': ['microsoft'],
    '568': ['google'],
    '569': ['google'],
    '570': ['bloomberg'],
    '572': ['ebay', 'facebook', 'google'],
    '576': ['baidu'],
    '578': ['facebook'],
    '579': ['amazon'],
    '581': ['google'],
    '582': ['bloomberg'],
    '583': ['google'],
    '587': ['google'],
    '591': ['microsoft'],
    '597': ['facebook'],
    '602': ['facebook'],
    '604': ['google'],
    '605': ['linkedin'],
    '606': ['amazon'],
    '616': ['google'],
    '617': ['amazon'],
    '621': ['facebook'],
    '631': ['microsoft'],
    '633': ['linkedin'],
    '636': ['facebook', 'uber'],
    '637': ['facebook'],
    '638': ['google'],
    '639': ['facebook'],
    '640': ['amazon'],
    '642': ['facebook', 'microsoft'],
    '643': ['google'],
    '644': ['google'],
    '645': ['amazon'],
    '646': ['amazon'],
    '647': ['facebook', 'linkedin'],
    '648': ['uber'],
    '650': ['microsoft'],
    '651': ['google', 'microsoft'],
    '652': ['google'],
    '653': ['facebook'],
    '654': ['microsoft'],
    '656': ['google'],
    '657': ['google'],
    '658': ['google'],
    '659': ['google'],
    '661': ['amazon'],
    '662': ['amazon'],
    '663': ['amazon'],
    '665': ['google'],
    '667': ['google'],
    '668': ['google'],
    '669': ['bloomberg'],
    '670': ['facebook'],
    '671': ['linkedin'],
    '672': ['microsoft'],
    '673': ['facebook'],
    '674': ['facebook'],
    '675': ['amazon'],
    '676': ['google'],
    '679': ['google'],
    '680': ['facebook'],
    '681': ['google'],
    '682': ['amazon'],
    '683': ['google'],
    '684': ['google'],
    '685': ['google'],
    '686': ['google'],
    '687': ['google'],
    '689': ['facebook', 'google'],
    '690': ['uber'],
    '692': ['amazon', 'bloomberg', 'uber'],
    '694': ['amazon'],
    '698': ['linkedin'],
    '699': ['uber'],
    '711': ['amazon'],
    '714': ['bloomberg', 'facebook'],
    '716': ['linkedin'],
    '719': ['google'],
    '721': ['facebook'],
    '722': ['microsoft'],
    '725': ['amazon'],
    '726': ['google'],
    '727': ['google'],
    '729': ['google'],
    '730': ['linkedin'],
    '731': ['google']
};

plugin.getProblems = function(cb) {
  plugin.next.getProblems(function(e, problems) {
    if (e) return cb(e);

    problems.forEach(function(problem) {
      var id = String(problem.id);
      if (!(id in DATA)) return;

      problem.companies = DATA[id];
    });

    return cb(null, problems);
  });
};

module.exports = plugin;
