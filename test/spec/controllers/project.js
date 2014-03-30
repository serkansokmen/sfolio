'use strict';

describe('Controller: ProjectCtrl', function () {

  // load the controller's module
  beforeEach(module('sfolioApp'));

  var ProjectCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    scope.project = {
      'id': 10931209,
      'name': 'Body Sequencer',
      'published_on': 1379290513,
      'created_on': 1379278693,
      'modified_on': 1380029961,
      'url': 'https://www.behance.net/gallery/Body-Sequencer/10931209',
      'privacy': 'public',
      'fields': [
        'Interaction Design',
        'Music',
        'Programming'
      ],
      'covers': {
        '115': 'https://m1.behance.net/rendition/projects/10931209/115/0cef96c77b79469814c0af81d3d8c3cd.jpeg',
        '202': 'https://m1.behance.net/rendition/projects/10931209/orig/0cef96c77b79469814c0af81d3d8c3cd.jpeg',
        '230': 'https://m1.behance.net/rendition/projects/10931209/230/0cef96c77b79469814c0af81d3d8c3cd.jpeg',
        '404': 'https://m1.behance.net/rendition/projects/10931209/404/0cef96c77b79469814c0af81d3d8c3cd.jpeg'
      },
      'mature_content': 0,
      'mature_access': 'allowed',
      'owners': [
        {
          'id': 690982,
          'first_name': 'Serkan',
          'last_name': 'Sökmen',
          'username': 'serkansokmen',
          'city': 'Istanbul',
          'state': '',
          'country': 'Turkey',
          'location': 'Istanbul, Turkey',
          'company': '',
          'occupation': 'Creative Developer',
          'created_on': 1318447511,
          'url': 'https://www.behance.net/serkansokmen',
          'images': {
            '50': 'https://m1.behance.net/profiles24/690982/50x84b77627bfeafe520c4726732baaec67.jpg',
            '115': 'https://m1.behance.net/profiles24/690982/115x84b77627bfeafe520c4726732baaec67.jpg',
            '138': 'https://m1.behance.net/profiles24/690982/84b77627bfeafe520c4726732baaec67.jpg'
          },
          'display_name': 'Serkan Sökmen',
          'fields': [
            'Programming',
            'Digital Art',
            'Fine Arts'
          ]
        }
      ],
      'stats': {
        'views': 153,
        'appreciations': 11,
        'comments': 0
      },
      'for_sale': 0,
      'tags': [
        'OpenFrameworks',
        'openTSPS',
        'body sequencer',
        'interactive',
        'Musical Instrument'
      ],
      'description': 'An Interactive Musical Instrument made with OpenFrameworks & OpenTSPS',
      'modules': [
        {
          'id': 79444523,
          'type': 'text',
          'text': '<div class="main-text"><span style="font-size: 14px; font-weight: normal;">Body&nbsp;Sequencer&nbsp;is an interactive musical instrument&nbsp;which reacts to audience movement in a defined grid-space. By turning these tracked objects / people into active participants of itself, it creates an endless musical harmony. Made with&nbsp;OpenFrameworks&nbsp;&amp; OpenTSPS.</span></div>\n\n<div>&nbsp;</div>\n\n<div>\n<div class="main-text"><span class="bold">Producer:</span>&nbsp;NERDWORKING</div>\n\n<div class="main-text"><span class="bold">Stage Design:</span> HIPO</div>\n\n<div class="main-text"><span class="bold">Sound Design:</span>&nbsp;Mehmet Yaranona</div>\n\n<div class="main-text"><span class="bold">Graphic Design:</span>&nbsp;Burcu &Ccedil;eliksap</div>\n\n<div class="main-text"><span class="bold">Technical Design &amp; Programing:</span> Serkan S&ouml;kmen</div>\n\n<div class="main-text"><span class="bold">Project Cordinator:</span> Saliha Yavuz</div>\n\n<div class="main-text"><span class="bold">Documentation:</span>&nbsp;G&ouml;khan Tekin</div>\n\n<div>&nbsp;</div>\n\n<div>2013</div>\n</div>\n',
          'text_plain': 'Body&nbsp;Sequencer&nbsp;is an interactive musical instrument&nbsp;which reacts to audience movement in a defined grid-space. By turning these tracked objects / people into active participants of itself, it creates an endless musical harmony. Made with&nbsp;OpenFrameworks&nbsp;&amp; OpenTSPS.\n\n&nbsp;\n\n\nProducer:&nbsp;NERDWORKING\n\nStage Design: HIPO\n\nSound Design:&nbsp;Mehmet Yaranona\n\nGraphic Design:&nbsp;Burcu &Ccedil;eliksap\n\nTechnical Design &amp; Programing: Serkan S&ouml;kmen\n\nProject Cordinator: Saliha Yavuz\n\nDocumentation:&nbsp;G&ouml;khan Tekin\n\n&nbsp;\n\n2013\n\n'
        },
        {
          'id': 79591801,
          'type': 'embed',
          'width': '600',
          'height': '338',
          'original_width': '600',
          'original_height': '338',
          'embed': '<iframe src="https://player.vimeo.com/video/74584720?title=0&amp;byline=0&amp;portrait=0" width="600" height="338" frameborder="0" webkitallowfullscreen=" mozallowfullscreen=" allowfullscreen=" style="z-index: 0; margin: 0px auto; display: block; height: 338px; width: 600px;"></iframe>'
        },
        {
          'id': 79444525,
          'type': 'image',
          'src': 'https://m1.behance.net/rendition/modules/79444525/disp/d47e6c2892b0f9e0e7e1f1e2dff700ca.jpg',
          'width': 600,
          'height': 338,
          'sizes': {
            'original': 'https://m1.behance.net/rendition/modules/79444525/orig/d47e6c2892b0f9e0e7e1f1e2dff700ca.jpg',
            'max_1240': 'https://m1.behance.net/rendition/modules/79444525/hd/d47e6c2892b0f9e0e7e1f1e2dff700ca.jpg',
            'max_1920': 'https://m1.behance.net/rendition/modules/79444525/fs/d47e6c2892b0f9e0e7e1f1e2dff700ca.jpg'
          }
        },
        {
          'id': 79444527,
          'type': 'image',
          'src': 'https://m1.behance.net/rendition/modules/79444527/disp/ac9094d20bfbf3e679a1567e8af509ce.jpg',
          'width': 600,
          'height': 338,
          'sizes': {
            'original': 'https://m1.behance.net/rendition/modules/79444527/orig/ac9094d20bfbf3e679a1567e8af509ce.jpg',
            'max_1240': 'https://m1.behance.net/rendition/modules/79444527/hd/ac9094d20bfbf3e679a1567e8af509ce.jpg',
            'max_1920': 'https://m1.behance.net/rendition/modules/79444527/fs/ac9094d20bfbf3e679a1567e8af509ce.jpg'
          }
        },
        {
          'id': 79444531,
          'type': 'image',
          'src': 'https://m1.behance.net/rendition/modules/79444531/disp/ffba7b65807cce7afc68367bd086b93b.png',
          'width': 600,
          'height': 338,
          'sizes': {
            'original': 'https://m1.behance.net/rendition/modules/79444531/orig/ffba7b65807cce7afc68367bd086b93b.png',
            'max_1240': 'https://m1.behance.net/rendition/modules/79444531/hd/ffba7b65807cce7afc68367bd086b93b.png'
          },
          'caption': '<div>First theme</div>\n',
          'caption_plain': 'First theme\n'
        },
        {
          'id': 79444533,
          'type': 'image',
          'src': 'https://m1.behance.net/rendition/modules/79444533/disp/e73f0dafe3a28b5723a334fc7aedea09.png',
          'width': 600,
          'height': 338,
          'sizes': {
            'original': 'https://m1.behance.net/rendition/modules/79444533/orig/e73f0dafe3a28b5723a334fc7aedea09.png',
            'max_1240': 'https://m1.behance.net/rendition/modules/79444533/hd/e73f0dafe3a28b5723a334fc7aedea09.png'
          },
          'caption': '<div>Second theme</div>\n',
          'caption_plain': 'Second theme\n'
        },
        {
          'id': 79444529,
          'type': 'image',
          'src': 'https://m1.behance.net/rendition/modules/79444529/disp/80fa3ba44f079e5b941b58b4965e1c9c.JPG',
          'width': 600,
          'height': 800,
          'sizes': {
            'original': 'https://m1.behance.net/rendition/modules/79444529/orig/80fa3ba44f079e5b941b58b4965e1c9c.JPG',
            'max_1240': 'https://m1.behance.net/rendition/modules/79444529/hd/80fa3ba44f079e5b941b58b4965e1c9c.JPG',
            'max_1920': 'https://m1.behance.net/rendition/modules/79444529/fs/80fa3ba44f079e5b941b58b4965e1c9c.JPG'
          }
        },
        {
          'id': 79591925,
          'type': 'embed',
          'width': '600',
          'height': '338',
          'original_width': '600',
          'original_height': '338',
          'embed': '<iframe src="https://player.vimeo.com/video/73562645?byline=0&amp;portrait=0" width="600" height="338" frameborder="0" webkitallowfullscreen=" mozallowfullscreen=" allowfullscreen=" style="z-index: 0; margin: 0px auto; display: block; height: 338px; width: 600px;"></iframe>',
          'caption': '<div>Early&nbsp;r<span style="font-size: 11px; line-height: 1.4em;">andomization&nbsp;test</span></div>\n',
          'caption_plain': 'Early&nbsp;randomization&nbsp;test\n'
        },
        {
          'id': 79591059,
          'type': 'embed',
          'width': 600,
          'height': 450,
          'original_width': '800',
          'original_height': '600',
          'embed': '<iframe src="https://player.vimeo.com/video/72983578?byline=0&amp;portrait=0" width="600" height="450" frameborder="0" webkitallowfullscreen=" mozallowfullscreen=" allowfullscreen=" style="z-index: 0; margin: 0px auto; display: block; height: 450px; width: 600px;"></iframe>',
          'caption': '<div>Using piano note samples</div>\n',
          'caption_plain': 'Using piano note samples\n'
        }
      ],
      'short_url': 'http://bit.ly/1944EhS',
      'copyright': {
        'license': 'cc by-nc-nd',
        'description': 'Attribution-NonCommercial-NoDerivs',
        'license_id': 1
      },
      'styles': {
        'text': {
          'title': {
            'font_family': 'arial,helvetica,sans-serif',
            'font_weight': 'bold',
            'color': '#3B3B3B',
            'text_align': 'left',
            'line_height': '1.4em',
            'font_size': '16px',
            'text_decoration': 'none',
            'font_style': 'normal',
            'display': 'inline'
          },
          'subtitle': {
            'font_family': 'arial,helvetica,sans-serif',
            'font_weight': 'normal',
            'color': '#3B3B3B',
            'text_align': 'left',
            'line_height': '1.4em',
            'font_size': '14px',
            'text_decoration': 'none',
            'font_style': 'normal',
            'display': 'inline'
          },
          'paragraph': {
            'font_family': 'arial,helvetica,sans-serif',
            'font_weight': 'normal',
            'color': '#3B3B3B',
            'text_align': 'left',
            'line_height': '1.4em',
            'font_size': '12px',
            'text_decoration': 'none',
            'font_style': 'normal',
            'display': 'inline'
          },
          'caption': {
            'font_family': 'arial,helvetica,sans-serif',
            'font_weight': 'normal',
            'color': '#3B3B3B',
            'text_align': 'left',
            'line_height': '1.4em',
            'font_size': '11px',
            'text_decoration': 'none',
            'font_style': 'italic',
            'display': 'block'
          },
          'link': {
            'font_family': 'arial,helvetica,sans-serif',
            'font_weight': 'normal',
            'color': '#1769FF',
            'text_align': 'left',
            'line_height': '1.4em',
            'font_size': '12px',
            'text_decoration': 'none',
            'font_style': 'normal',
            'display': 'inline'
          }
        },
        'background': {
          'color': 'FFFFFF'
        },
        'spacing': {
          'project': {
            'top_margin': 50
          },
          'modules': {
            'bottom_margin': 20
          }
        },
        'dividers': {
          'display': 'none'
        }
      }
    };


    ProjectCtrl = $controller('ProjectCtrl', {
      $scope: scope
    });
  }));

  it('should attach a project to the scope', function () {
    //expect(scope.project).toBe(true);
  });
});
