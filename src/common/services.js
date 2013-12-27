/* Services */

angular.module('ngUnicityEnrollment.services',[
    'ngResource'
])

.service("countryModel", ['$window', function($window) {
    var australia = {"name": "Australia", "code": "AU", "enrollURL": "https://secure.unicity.net/unicityphl/Application/Apply.cfm?MemberType=B&Country=AUS"},  // Australia
        austria = {"name": "Austria", "code": "AT", "enrollURL": "https://secure.unicity.net/unicityeu/Application/Apply.cfm?LNG=DE&country=DEU&ReturnURL=ger.makelifebetter.com"},  // Austria
        cambodia = {"name": "Cambodia", "code": "KH", "enrollURL": "http://www.unicity.com/cambodia"},  // Cambodia
        canada = {"name": "Canada", "code": "CA", "market": "can", "languages": [{"locale": "en_CA", "name": "English"}, {"locale": "fr_CA", "name": "Français"}]}, // Canada
        colombia = {"name": "Colombia", "code": "CO", "enrollURL": "https://secure.unicity.net/unicityven/Application/Apply.cfm?MemberType=A&Country=COL&Lng=es"},  // Colombia
        denmark = {"name": "Denmark", "code": "DK", "enrollURL": "http://www.unicity.com/denmark"},  // Denmark
        eu = {"name": "EU", "code": "EU", "enrollURL": "https://secure.unicity.net/unicityeu/Application/Apply.cfm"},  // Europe
        germany = {"name": "Germany", "code": "DE", "enrollURL": "https://secure.unicity.net/unicityeu/Application/Apply.cfm?LNG=DE&country=DEU&ReturnURL=ger.makelifebetter.com"},  // Germany
        hongkong = {"name": "Hong Kong", "code": "HK", "enrollURL": "http://www.unicity.com/hongkong?page=opportunity"},  // Hong Kong
        hungary = {"name": "Hungary", "code": "HU", "enrollURL": "https://secure.unicity.net/unicityeu/Application/Apply.cfm?LNG=HU&country=HUN&ReturnURL=hun.makelifebetter.com"},  // Hungary
        india = {"name": "India", "code": "IN", "enrollURL": "https://secure.unicity.net/unicityusa/Application/Apply.cfm?Country=IND&lng=en_ind&Theme=Default"},  // India
        indonesia = {"name": "Indonesia", "code": "ID", "enrollURL": "http://www.unicity.com/indonesia/en/join"},  // Indonesia
        italy = {"name": "Italy", "code": "IT", "languages": [{"locale": "en_US", "name": "English"}], "enrollURL": "https://secure.unicity.net/unicityeu/Application/Apply.cfm?LNG=IT"},  // Italy
        jamaica = {"name": "Jamaica", "code": "JM", "enrollURL": "http://www.unicity.com/jamaica"},  // Jamaica
        japan = {"name": "Japan", "code": "JP", "enrollURL": "https://secure.unicity.net/unicityjpn/Application/Apply.cfm?"},  // Japan
        korea = {"name": "Korea", "code": "KR", "enrollURL": "http://www.makelifebetter.co.kr/korea/business/join.php"},  // Korea
        laos = {"name": "Laos", "code": "LA", "enrollURL": "http://www.unicity.com/laos"},  // Laos
        malaysia = {"name": "Malaysia", "code": "MY", "market": "mys", "languages": [{"locale": "en_MY", "name": "English"}, {"locale": "ms_MY", "name": "Melayu"}]},
        mexico = {"name": "Mexico", "code": "MX", "enrollURL": "https://secure.unicity.net/unicityusa/Application/Apply.cfm?MemberType=A&Country=MEX&lng=es&Theme=Default"},  // Mexico
        netherlands = {"name": "Netherlands", "code": "NL", "enrollURL": "https://secure.unicity.net/unicityeu/Application/Apply.cfm?LNG=NL&country=NLD&ReturnURL=www.nld.makelifebetter.com"},  // Netherlands
        newzealand = {"name": "New Zealand", "code": "NZ", "enrollURL": "https://secure.unicity.net/unicityphl/Application/Apply.cfm?MemberType=A&Country=NZL"},  // New Zealand
        nigeria = {"name": "Nigeria", "code": "NG", "enrollURL": "http://www.unicity.com/nigeria"},  // Nigeria
        philippines = {"name": "Philippines", "code": "PH", "enrollURL": "https://secure.unicity.net/unicityphl/Application/Apply.cfm?MemberType=A"},  // Philippines
        poland = {"name": "Poland", "code": "PL", "enrollURL": "https://secure.unicity.net/unicityeu/Application/Apply.cfm?LNG=PL&country=POL&ReturnURL=www.pol.makelifebetter.com"},  // Poland
        puertorico = {"name": "Puerto Rico", "code": "PR", "languages": [{"locale": "es_US", "name": "Español"}, {"locale": "en_US", "name": "English"}], "enrollURL": "https://enrollment.unicity.net/usa/page/index?locale=es_US&SponsorID=&EnrollerID=&filter=all"},  // Puerto Rico
        singapore = {"name": "Singapore", "code": "SG", "enrollURL": "http://www.unicity.com/singapore/?page=opportunity"},  // Singapore
        sweden = {"name": "Sweden", "code": "SE", "enrollURL": "https://secure.unicity.net/unicityeu/Application/Apply.cfm?LNG=EN&country=SWE&ReturnURL=swe.makelifebetter.com"},  // Sweden
        switzerland = {"name": "Switzerland", "code": "CH", "enrollURL": "https://secure.unicity.net/unicityeu/Application/Apply.cfm?LNG=DE&country=DEU&ReturnURL=ger.makelifebetter.com"},  // Switzerland
        taiwan = {"name": "Taiwan", "code": "TW", "enrollURL": "https://secure.unicity.net/unicitytwn/Application/Apply.cfm"},  // Taiwan
        thailand = {"name": "Thailand", "code": "TH", "enrollURL": "https://secure.unicity.net/unicitytha/Application/Apply.cfm"},  // Thailand
        unitedstates = {"name": "United States", "code": "US", "market": "usa", "languages": [{"locale": "en_US", "name": "English"}, {"locale": "es_US", "name": "Español"}]},
        turkey = {"name": "Turkey", "code": "ru_TR", "enrollURL": "https://secure.unicity.net/unicityeu/Application/Apply.cfm?LNG=TR&country=TUR&ReturnURL=tur.makelifebetter.com"},  // Turkey
        uae = {"name": "UAE", "code": "AE", "enrollURL": "https://secure.unicity.net/unicityusa/Application/Apply.cfm?MemberType=A&Country=ARE&lng=en_ARE&Itemid=264"},  // UAE
        ukraine = {"name": "Ukraine", "code": "UA", "enrollURL": "https://secure.unicity.net/unicityusa/Application/Apply.cfm?MemberType=A&Country=UKR&Lng=uk"},  // Ukraine
        uk = {"name": "UK", "code": "UK", "enrollURL": "https://secure.unicity.net/unicityeu/Application/Apply.cfm?LNG=ENG&country=GBR&ReturnURL=www.eng.makelifebetter.com"},  // UK
        venezuela = {"name": "Venezuela", "code": "VN", "enrollURL": "http://www.unicity.com/venezuela"},  // Venezuela
        vietnam = {"name": "Vietnam", "code": "VT", "enrollURL": "http://www.unicity.com/vietnam"}  // Vietnam
    ;

    this.list = [
        canada, malaysia, unitedstates
    ];

    //iterate through the array until the active country is found
    //This is fired on initial loading of this service

    this.init = function() {
        var selectedCountry = this.list.filter( function( element, index, array ) {
            // check that country is at least minimally setup
            return true;
        });
        if (!$window.localStorage.getItem('country') && selectedCountry.length === 0) {
          // default to US
          selectedCountry = [unitedstates];
          unitedstates.active = true;
        }else if (selectedCountry.length === 0){
            country = $window.localStorage.getItem('country');
            thisCountry = $.grep(this.list, function(n,i){
                return n.name === country;
            });
            thisCountry[0].active=true;
            selectedCountry=[thisCountry[0]];
        } 
        this.selectedCountry = selectedCountry.shift();
    };

    this.countryLookup=function(country){
        var selCountry;
        country=country.replace("-", " ");
        selCountry = $.grep(this.list, function(n, i){
            return n.name.toLowerCase()===country.toLowerCase();
        });
        return selCountry[0];
    };

    this.setSelectedCountry = function(country) {
        this.selectedCountry.active = false;
        if(this.list.indexOf(country) > -1) {
            country.active = true;
            this.selectedCountry = country;
        }
    };
}])

.service('xeditLanguages', function(){

    this.translations={ 
        
        "ar":{
            days: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"],
            daysShort: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت", "أحد"],
            daysMin: ["ح", "ن", "ث", "ع", "خ", "ج", "س", "ح"],
            months: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            monthsShort: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            today: "هذا اليوم",
            rtl: true
        },
        "bg":{
            days: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота", "Неделя"],
            daysShort: ["Нед", "Пон", "Вто", "Сря", "Чет", "Пет", "Съб", "Нед"],
            daysMin: ["Н", "П", "В", "С", "Ч", "П", "С", "Н"],
            months: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
            monthsShort: ["Ян", "Фев", "Мар", "Апр", "Май", "Юни", "Юли", "Авг", "Сеп", "Окт", "Ное", "Дек"],
            today: "днес"
  
        },
        "ca":{
            days: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenge"],
            daysShort: ["Diu",  "Dil", "Dmt", "Dmc", "Dij", "Div", "Dis", "Diu"],
            daysMin: ["dg", "dl", "dt", "dc", "dj", "dv", "ds", "dg"],
            months: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
            monthsShort: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Des"],
            today: "Avui"
        },
        "cs":{
            days: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota", "Neděle"],
            daysShort: ["Ned", "Pon", "Úte", "Stř", "Čtv", "Pát", "Sob", "Ned"],
            daysMin: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So", "Ne"],
            months: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
            monthsShort: ["Led", "Úno", "Bře", "Dub", "Kvě", "Čer", "Čnc", "Srp", "Zář", "Říj", "Lis", "Pro"],
            today: "Dnes"
        },
        "cy":{
            days: ["Sul", "Llun", "Mawrth", "Mercher", "Iau", "Gwener", "Sadwrn", "Sul"],
            daysShort: ["Sul", "Llu", "Maw", "Mer", "Iau", "Gwe", "Sad", "Sul"],
            daysMin: ["Su", "Ll", "Ma", "Me", "Ia", "Gwe", "Sa", "Su"],
            months: ["Ionawr", "Chewfror", "Mawrth", "Ebrill", "Mai", "Mehefin", "Gorfennaf", "Awst", "Medi", "Hydref", "Tachwedd", "Rhagfyr"],
            monthsShort: ["Ion", "Chw", "Maw", "Ebr", "Mai", "Meh", "Gor", "Aws", "Med", "Hyd", "Tach", "Rha"],
            today: "Heddiw"
        },

        "en":{
            
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"],
            daysMin: ["S", "M", "T", "W", "Th", "F", "Sa", "S"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today"
        
        },
        "es":{
            days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
            daysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
            daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"],
            months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            today: "Hoy"
        },
        "fr":{
             days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
            daysShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
            daysMin: ["D", "L", "Ma", "Me", "J", "V", "S", "D"],
            months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            monthsShort: ["Jan", "Fev", "Mar", "Avr", "Mai", "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec"],
            today: "Aujourd'hui"
        }
        
        
    };


});
