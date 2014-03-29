'use strict';

describe('Controller: ProjectsCtrl', function () {

  // load the controller's module
  beforeEach(module('sfolioApp'));

  var ProjectsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    scope.projects = [
      {
        'id': 11763509,
        'name': 'Climax',
        'published_on': 1382961497,
        'created_on': 1382960571,
        'modified_on': 1382961523,

        'fields': [
          'Digital Art',
          'Programming'
        ],
        'covers': {
          '115': 'https://m1.behance.net/rendition/projects/11763509/115/c1884a1c28dc8819c3f4001014d16aa0.png',
          '202': 'https://m1.behance.net/rendition/projects/11763509/orig/c1884a1c28dc8819c3f4001014d16aa0.png',
          '230': 'https://m1.behance.net/rendition/projects/11763509/230/c1884a1c28dc8819c3f4001014d16aa0.png',
          '404': 'https://m1.behance.net/rendition/projects/11763509/404/c1884a1c28dc8819c3f4001014d16aa0.png'
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
          'views': 157,
          'appreciations': 16,
          'comments': 2
        },
        'for_sale': 0
      },
      {
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
        'for_sale': 0
      },
      {
        'id': 5535609,
        'name': 'Academiada Art Festival Installations',
        'published_on': 1350394044,
        'created_on': 1350393134,
        'modified_on': 1352940532,
        'url': 'https://www.behance.net/gallery/Academiada-Art-Festival-Installations/5535609',
        'privacy': 'public',
        'fields': [
          'Fine Arts'
        ],
        'covers': {
          '115': 'https://m1.behance.net/rendition/projects/5535609/115/c2f913c30f7b6ce64a131a2bfd679dba.jpg',
          '202': 'https://m1.behance.net/rendition/projects/5535609/orig/c2f913c30f7b6ce64a131a2bfd679dba.jpg',
          '230': 'https://m1.behance.net/rendition/projects/5535609/230/c2f913c30f7b6ce64a131a2bfd679dba.jpg',
          '404': 'https://m1.behance.net/rendition/projects/5535609/404/c2f913c30f7b6ce64a131a2bfd679dba.jpg'
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
          'views': 113,
          'appreciations': 4,
          'comments': 0
        },
        'for_sale': 0
      },
      {
        'id': 5535403,
        'name': 'Ropes & Space',
        'published_on': 1350392500,
        'created_on': 1350392177,
        'modified_on': 1352940528,
        'url': 'https://www.behance.net/gallery/Ropes-Space/5535403',
        'privacy': 'public',
        'fields': [
          'Fine Arts'
        ],
        'covers': {
          '115': 'https://m1.behance.net/rendition/projects/5535403/115/16b34b563c27e5591a83a3b8aafb90b5.jpg',
          '202': 'https://m1.behance.net/rendition/projects/5535403/orig/16b34b563c27e5591a83a3b8aafb90b5.jpg',
          '230': 'https://m1.behance.net/rendition/projects/5535403/230/16b34b563c27e5591a83a3b8aafb90b5.jpg',
          '404': 'https://m1.behance.net/rendition/projects/5535403/404/16b34b563c27e5591a83a3b8aafb90b5.jpg'
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
          'views': 107,
          'appreciations': 3,
          'comments': 0
        },
        'for_sale': 0
      }
    ];

    ProjectsCtrl = $controller('ProjectsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of projects to the scope', function () {
    //expect(scope.projects.length).toBe(4);
  });
});
