var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi();

/**
 * Get metadata of tracks, albums, artists, shows, and episodes
 */

// Get album
spotifyApi.getAlbum('5U4W9E5WsYb2jUQWePT8Xm')
  .then(function(data) {
    console.log('Album information', data.body);
  }, function(err) {
    console.error(err);
  });

// Get multiple albums
spotifyApi.getAlbums(['5U4W9E5WsYb2jUQWePT8Xm', '3KyVcddATClQKIdtaap4bV'])
  .then(function(data) {
    console.log('Albums information', data.body);
  }, function(err) {
    console.error(err);
  });

// Get an artist
spotifyApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3')
  .then(function(data) {
    console.log('Artist information', data.body);
  }, function(err) {
    console.error(err);
  });

// Get multiple artists
spotifyApi.getArtists(['2hazSY4Ef3aB9ATXW7F5w3', '6J6yx1t3nwIDyPXk5xa7O8'])
  .then(function(data) {
    console.log('Artists information', data.body);
  }, function(err) {
    console.error(err);
  });

// Get albums by a certain artist
spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
  .then(function(data) {
    console.log('Artist albums', data.body);
  }, function(err) {
    console.error(err);
  });

// Search tracks whose name, album or artist contains 'Love'
spotifyApi.searchTracks('Love')
  .then(function(data) {
    console.log('Search by "Love"', data.body);
  }, function(err) {
    console.error(err);
  });

// Search artists whose name contains 'Love'
spotifyApi.searchArtists('Love')
  .then(function(data) {
    console.log('Search artists by "Love"', data.body);
  }, function(err) {
    console.error(err);
  });

// Search tracks whose artist's name contains 'Love'
spotifyApi.searchTracks('artist:Love')
  .then(function(data) {
    console.log('Search tracks by "Love" in the artist name', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Search tracks whose artist's name contains 'Kendrick Lamar', and track name contains 'Alright'
spotifyApi.searchTracks('track:Alright artist:Kendrick Lamar')
  .then(function(data) {
    console.log('Search tracks by "Alright" in the track name and "Kendrick Lamar" in the artist name', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });


// Search playlists whose name or description contains 'workout'
spotifyApi.searchPlaylists('workout')
  .then(function(data) {
    console.log('Found playlists are', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Get tracks in an album
spotifyApi.getAlbumTracks('41MnTivkwTO3UUJ8DrqEJJ', { limit : 5, offset : 1 })
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Get an artist's top tracks
spotifyApi.getArtistTopTracks('0oSGxfWSnnOXhD2fKuz2Gy', 'GB')
  .then(function(data) {
    console.log(data.body);
    }, function(err) {
    console.log('Something went wrong!', err);
  });

// Get artists related to an artist
spotifyApi.getArtistRelatedArtists('0qeei9KQnptjwb8MgkqEoy')
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    done(err);
  });

/* Get Audio Features for a Track */
spotifyApi.getAudioFeaturesForTrack('3Qm86XLflmIXVm1wcwkgDK')
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    done(err);
  });

/* Get Audio Analysis for a Track */
spotifyApi.getAudioAnalysisForTrack('3Qm86XLflmIXVm1wcwkgDK')
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    done(err);
  });

/* Get Audio Features for several tracks */
spotifyApi.getAudioFeaturesForTracks(['4iV5W9uYEdYUVa79Axb7Rh', '3Qm86XLflmIXVm1wcwkgDK'])
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    done(err);
  });


/*
 * User methods
 */

// Get a user
spotifyApi.getUser('petteralexis')
  .then(function(data) {
    console.log('Some information about this user', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Get the authenticated user
spotifyApi.getMe()
  .then(function(data) {
    console.log('Some information about the authenticated user', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

/*
 * Playlist methods
 */

// Get a playlist
spotifyApi.getPlaylist('5ieJqeLJjjI8iJWaxeBLuK')
  .then(function(data) {
    console.log('Some information about this playlist', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Get a user's playlists
spotifyApi.getUserPlaylists('thelinmichael')
  .then(function(data) {
    console.log('Retrieved playlists', data.body);
  },function(err) {
    console.log('Something went wrong!', err);
  });

// Create a private playlist
spotifyApi.createPlaylist('My playlist', { 'description': 'My description', 'public': true })
  .then(function(data) {
    console.log('Created playlist!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Add tracks to a playlist
spotifyApi.addTracksToPlaylist('5ieJqeLJjjI8iJWaxeBLuK', ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"])
  .then(function(data) {
    console.log('Added tracks to playlist!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Add tracks to a specific position in a playlist
spotifyApi.addTracksToPlaylist('5ieJqeLJjjI8iJWaxeBLuK', ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"],
  {
    position : 5
  })
  .then(function(data) {
    console.log('Added tracks to playlist!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Remove tracks from a playlist at a specific position
spotifyApi.removeTracksFromPlaylistByPosition('5ieJqeLJjjI8iJWaxeBLuK', [0, 2, 130], "0wD+DKCUxiSR/WY8lF3fiCTb7Z8X4ifTUtqn8rO82O4Mvi5wsX8BsLj7IbIpLVM9")
  .then(function(data) {
    console.log('Tracks removed from playlist!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Remove all occurrence of a track
var tracks = [{ uri : "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" }];
var playlistId = '5ieJqeLJjjI8iJWaxeBLuK';
var options = { snapshot_id : "0wD+DKCUxiSR/WY8lF3fiCTb7Z8X4ifTUtqn8rO82O4Mvi5wsX8BsLj7IbIpLVM9" };
spotifyApi.removeTracksFromPlaylist(playlistId, tracks, options)
  .then(function(data) {
    console.log('Tracks removed from playlist!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Reorder the first two tracks in a playlist to the place before the track at the 10th position
var options = { "range_length" : 2 };
spotifyApi.reorderTracksInPlaylist('5ieJqeLJjjI8iJWaxeBLuK', 0, 10, options)
  .then(function(data) {
    console.log('Tracks reordered in playlist!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Change playlist details
spotifyApi.changePlaylistDetails('5ieJqeLJjjI8iJWaxeBLuK',
  {
    name: 'This is a new name for my Cool Playlist, and will become private',
    'public' : false
  }).then(function(data) {
     console.log('Playlist is now private!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Upload a custom playlist cover image
spotifyApi.uploadCustomPlaylistCoverImage('5ieJqeLJjjI8iJWaxeBLuK','longbase64uri')
  .then(function(data) {
     console.log('Playlsit cover image uploaded!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Follow a playlist (privately)
spotifyApi.followPlaylist('5ieJqeLJjjI8iJWaxeBLuK',
  {
    'public' : false
  }).then(function(data) {
     console.log('Playlist successfully followed privately!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Unfollow a playlist
spotifyApi.unfollowPlaylist('5ieJqeLJjjI8iJWaxeBLuK')
  .then(function(data) {
     console.log('Playlist successfully unfollowed!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Check if Users are following a Playlist
spotifyApi.areFollowingPlaylist('5ieJqeLJjjI8iJWaxeBLuK', ['thelinmichael', 'ella'])
 .then(function(data) {
    data.body.forEach(function(isFollowing) {
      console.log("User is following: " + isFollowing);
    });
  }, function(err) {
    console.log('Something went wrong!', err);
  });

/*
 * Following Users and Artists methods
 */

/* Get followed artists */
spotifyApi.getFollowedArtists({ limit : 1 })
  .then(function(data) {
      // 'This user is following 1051 artists!'
     console.log('This user is following ', data.body.artists.total, ' artists!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });

/* Follow a user */
spotifyApi.followUsers(['thelinmichael'])
  .then(function(data) {
     console.log(data);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

/* Follow an artist */
spotifyApi.followArtists(['2hazSY4Ef3aB9ATXW7F5w3', '6J6yx1t3nwIDyPXk5xa7O8'])
  .then(function(data) {
     console.log(data);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

/* Unfollow a user */
spotifyApi.unfollowUsers(['thelinmichael'])
  .then(function(data) {
     console.log(data);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

/* Unfollow an artist */
spotifyApi.unfollowArtists(['2hazSY4Ef3aB9ATXW7F5w3', '6J6yx1t3nwIDyPXk5xa7O8'])
  .then(function(data) {
     console.log(data);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

/* Check if a user is following a user */
let usersId = ['thelinmichael'];

spotifyApi.isFollowingUsers(usersId)
  .then(function(data) {
    let isFollowing = data.body;

    for (let index = 0; index < usersId.length; index++) {
      console.log(usersId[index] + ':' + isFollowing[index])
    }
  }, function(err) {
    console.log('Something went wrong!', err);
  });

/* Check if a user is following an artist */
let artistsId = ['6mfK6Q2tzLMEchAr0e9Uzu', '4DYFVNKZ1uixa6SQTvzQwJ'];

spotifyApi.isFollowingArtists(artistsId)
  .then(function(data) {
    let isFollowing = data.body;

    for (let index = 0; index < artistsId.length; index++) {
      console.log(artistsId[index] + ':' + isFollowing[index])
    }
  }, function(err) {
    console.log('Something went wrong!', err);
  });

/*
 * Your Music library methods
 */

/* Tracks */

// Get tracks in the signed in user's Your Music library
spotifyApi.getMySavedTracks({
    limit : 2,
    offset: 1
  })
  .then(function(data) {
    console.log('Done!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });


// Check if tracks are in the signed in user's Your Music library
spotifyApi.containsMySavedTracks(["5ybJm6GczjQOgTqmJ0BomP"])
  .then(function(data) {

    // An array is returned, where the first element corresponds to the first track ID in the query
    var trackIsInYourMusic = data.body[0];

    if (trackIsInYourMusic) {
      console.log('Track was found in the user\'s Your Music library');
    } else {
      console.log('Track was not found.');
    }
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Remove tracks from the signed in user's Your Music library
spotifyApi.removeFromMySavedTracks(["3VNWq8rTnQG6fM1eldSpZ0"])
  .then(function(data) {
    console.log('Removed!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });
});

// Add tracks to the signed in user's Your Music library
spotifyApi.addToMySavedTracks(["3VNWq8rTnQG6fM1eldSpZ0"])
  .then(function(data) {
    console.log('Added track!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });
});

/* Albums */

// Get albums in the signed in user's Your Music library
spotifyApi.getMySavedAlbums({
    limit : 1,
    offset: 0
  })
  .then(function(data) {
    // Output items
    console.log(data.body.items);
  }, function(err) {
    console.log('Something went wrong!', err);
  });


// Check if albums are in the signed in user's Your Music library
spotifyApi.containsMySavedAlbums(["1H8AHEB8VSE8irHViGOIrF"])
  .then(function(data) {

    // An array is returned, where the first element corresponds to the first album ID in the query
    var albumIsInYourMusic = data.body[0];

    if (albumIsInYourMusic) {
      console.log('Album was found in the user\'s Your Music library');
    } else {
      console.log('Album was not found.');
    }
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Remove albums from the signed in user's Your Music library
spotifyApi.removeFromMySavedAlbums(["1H8AHEB8VSE8irHViGOIrF"])
  .then(function(data) {
    console.log('Removed!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });
});

// Add albums to the signed in user's Your Music library
spotifyApi.addToMySavedAlbums(["1H8AHEB8VSE8irHViGOIrF"])
  .then(function(data) {
    console.log('Added album!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });
});


/*
 * Browse methods
 */

  // Retrieve new releases
spotifyApi.getNewReleases({ limit : 5, offset: 0, country: 'SE' })
  .then(function(data) {
    console.log(data.body);
      done();
    }, function(err) {
       console.log("Something went wrong!", err);
    });
  });

//  Retrieve featured playlists
spotifyApi.getFeaturedPlaylists({ limit : 3, offset: 1, country: 'SE', locale: 'sv_SE', timestamp:'2014-10-23T09:00:00' })
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    console.log("Something went wrong!", err);
  });

// Get a List of Categories
spotifyApi.getCategories({
      limit : 5,
      offset: 0,
      country: 'SE',
      locale: 'sv_SE'
  })
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    console.log("Something went wrong!", err);
  });

// Get a Category (in Sweden)
spotifyApi.getCategory('party', {
      country: 'SE',
      locale: 'sv_SE'
  })
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    console.log("Something went wrong!", err);
  });

// Get Playlists for a Category (Party in Brazil)
spotifyApi.getPlaylistsForCategory('party', {
      country: 'BR',
      limit : 2,
      offset : 0
    })
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    console.log("Something went wrong!", err);
  });

// Get Recommendations Based on Seeds
spotifyApi.getRecommendations({
      min_energy: 0.4,
      seed_artists: ['6mfK6Q2tzLMEchAr0e9Uzu', '4DYFVNKZ1uixa6SQTvzQwJ'],
      min_popularity: 50
    })
  .then(function(data) {
    let recommendations = data.body;
    console.log(recommendations);
  }, function(err) {
    console.log("Something went wrong!", err);
  });

// Get available genre seeds
spotifyApi.getAvailableGenreSeeds()
  .then(function(data) {
    let genreSeeds = data.body;
    console.log(genreSeeds);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

/* Player */

// Add an Item to the User's Playback Queue
// TBD

// Get a User's Available Devices
spotifyApi.getMyDevices()
  .then(function(data) {
    let availableDevices = data.body.devices;
    console.log(availableDevices);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Get Information About The User's Current Playback State
spotifyApi.getMyCurrentPlaybackState()
  .then(function(data) {
    // Output items
    if (data.body && data.body.is_playing) {
      console.log("User is currently playing something!");
    } else {
      console.log("User is not playing anything, or doing so in private.");
    }
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Get Current User's Recently Played Tracks
spotifyApi.getMyRecentlyPlayedTracks({
  limit : 20
}).then(function(data) {
    // Output items
    console.log("Your 20 most recently played tracks are:");
    data.body.items.forEach(item => console.log(item.track));
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Get the User's Currently Playing Track 
spotifyApi.getMyCurrentPlayingTrack()
  .then(function(data) {
    console.log('Now playing: ' + data.body.item.name);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Pause a User's Playback
spotifyApi.pause()
  .then(function() {
    console.log('Playback paused');
  }, function(err) {
    //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
    console.log('Something went wrong!', err);
  });

// Seek To Position In Currently Playing Track
spotifyApi.seek(positionMs)
  .then(function() {
    console.log('Seek to ' + positionMs);
  }, function(err) {
    //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
    console.log('Something went wrong!', err);
  });

// Set Repeat Mode On User’s Playback
spotifyApi.setRepeat('track')
  .then(function () {
    console.log('Repeat track.');
    }, function(err) {
    //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
    console.log('Something went wrong!', err);
  });

// Set Volume For User's Playback
spotifyApi.setVolume(50)
  .then(function () {
    console.log('Setting volume to 50.');
    }, function(err) {
    //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
    console.log('Something went wrong!', err);
  });

// Skip User’s Playback To Next Track
spotifyApi.skipToNext()
  .then(function() {
    console.log('Skip to next');
  }, function(err) {
    //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
    console.log('Something went wrong!', err);
  });

// Skip User’s Playback To Previous Track 
spotifyApi.skipToPrevious()
  .then(function() {
    console.log('Skip to previous');
  }, function(err) {
    //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
    console.log('Something went wrong!', err);
  });

// Start/Resume a User's Playback 
spotifyApi.play()
  .then(function() {
    console.log('Playback started');
  }, function(err) {
    //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
    console.log('Something went wrong!', err);
  });

// Toggle Shuffle For User’s Playback
spotifyApi.setShuffle(true)
  .then(function() {
    console.log('Shuffle is on.');
  }, function  (err) {
    //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
    console.log('Something went wrong!', err);
  });

// Transfer a User's Playback
spotifyApi.transferMyPlayback(deviceIds)
  .then(function() {
    console.log('Transfering playback to ' + deviceIds);
  }, function(err) {
    //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
    console.log('Something went wrong!', err);
  });


/**
 * Personalization Endpoints
 */

/* Get a User’s Top Artists*/
spotifyApi.getMyTopArtists()
  .then(function(data) {
    let topArtists = data.body.items;
    console.log(topArtists);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

/* Get a User’s Top Tracks*/
spotifyApi.getMyTopTracks()
  .then(function(data) {
    let topTracks = data.body.items;
    console.log(topTracks);
  }, function(err) {
    console.log('Something went wrong!', err);
  });
