export const EndpointsArray: Array<string> = [
    // 'admin/abuse-user-reports' ,
    // 'admin/delete-all-files-of-a-user',
    // 'admin/delete-logs',
    // 'admin/get-index-stats',
    // 'admin/get-table-stats',
    // 'admin/invite',
    // 'admin/logs',
    // 'admin/reset-password',
    // 'admin/resolve-abuse-user-report',
    // 'admin/resync-chart',
    // 'admin/send-email',
    // 'admin/server-info',
    // 'admin/show-moderation-logs',
    // 'admin/show-user',
    // 'admin/show-users',
    // 'admin/silence-user',
    // 'admin/suspend-user',
    // 'admin/unsilence-user',
    // 'admin/unsuspend-user',
    // 'admin/update-meta',
    // 'admin/vacuum',
    // 'admin/accounts/create',
    // 'admin/ad/create',
    // 'admin/ad/delete',
    // 'admin/ad/list',
    // 'admin/ad/update',
    // 'admin/announcements/create',
    // 'admin/announcements/delete',
    // 'admin/announcements/list',
    // 'admin/announcements/update',
    // 'admin/drive/clean-remote-files',
    // 'admin/drive/cleanup',
    // 'admin/drive/files',
    // 'admin/drive/show-file',
    // 'admin/emoji/add',
    // 'admin/emoji/copy',
    // 'admin/emoji/list-remote',
    // 'admin/emoji/list',
    // 'admin/emoji/remove',
    // 'admin/emoji/update',
    // 'admin/federation/delete-all-files',
    // 'admin/federation/refresh-remote-instance-metadata',
    // 'admin/federation/remove-all-following',
    // 'admin/federation/update-instance',
    // 'admin/moderators/add',
    // 'admin/moderators/remove',
    // 'admin/promo/create',
    // 'admin/queue/clear',
    // 'admin/queue/deliver-delayed',
    // 'admin/queue/inbox-delayed',
    // 'admin/queue/jobs',
    // 'admin/queue/stats',
    // 'admin/relays/add',
    // 'admin/relays/list',
    // 'admin/relays/remove',
    // 'announcements',
    // 'antennas/create',
    // 'antennas/delete',
    // 'antennas/list',
    // 'antennas/notes',
    // 'antennas/show',
    // 'antennas/update',
    // 'ap/get',
    // 'ap/show',
    // 'app/create',
    // 'app/show',
    // 'auth/accept',
    // 'auth/session/generate',
    // 'auth/session/show',
    // 'auth/session/userkey',
    // 'blocking/create',
    // 'blocking/delete',
    // 'blocking/list',
    // 'channels/create',
    // 'channels/featured',
    // 'channels/follow',
    // 'channels/followed',
    // 'channels/owned',
    // 'channels/pin-note',
    // 'channels/show',
    // 'channels/timeline',
    // 'channels/unfollow',
    // 'channels/update',
    // 'charts/active-users',
    // 'charts/drive',
    // 'charts/federation',
    // 'charts/hashtag',
    // 'charts/instance',
    // 'charts/network',
    // 'charts/notes',
    // 'charts/user/drive',
    // 'charts/user/following',
    // 'charts/user/notes',
    // 'charts/user/reactions',
    // 'charts/users',
    // 'clips/add-note',
    // 'clips/create',
    // 'clips/delete',
    // 'clips/list',
    // 'clips/notes',
    // 'clips/show',
    // 'clips/update',
    // 'drive',
    // 'drive/files',
    // 'drive/files/attached-notes',
    // 'drive/files/check-existence',
    // 'drive/files/create',
    // 'drive/files/delete',
    // 'drive/files/find-by-hash',
    // 'drive/files/find',
    // 'drive/files/show',
    // 'drive/files/update',
    // 'drive/files/upload-from-url',
    // 'drive/folders',
    // 'drive/folders/create',
    // 'drive/folders/delete',
    // 'drive/folders/find',
    // 'drive/folders/show',
    // 'drive/folders/update',
    // 'drive/stream',
    // 'endpoint',
    // 'endpoints',
    // 'federation/dns',
    // 'federation/followers',
    // 'federation/following',
    // 'federation/instances',
    // 'federation/show-instance',
    // 'federation/update-remote-user',
    // 'federation/users',
    // 'following/create',
    // 'following/delete',
    // 'following/requests/accept',
    // 'following/requests/cancel',
    // 'following/requests/list',
    // 'following/requests/reject',
    // 'gallery/featured',
    // 'gallery/popular',
    // 'gallery/posts',
    // 'gallery/posts/create',
    // 'gallery/posts/delete',
    // 'gallery/posts/like',
    // 'gallery/posts/show',
    // 'gallery/posts/unlike',
    // 'gallery/posts/update',
    // 'games/reversi/games',
    // 'games/reversi/games/show',
    // 'games/reversi/games/surrender',
    // 'games/reversi/invitations',
    // 'games/reversi/match',
    // 'games/reversi/match/cancel',
    // 'get-online-users-count',
    // 'hashtags/list',
    // 'hashtags/search',
    // 'hashtags/show',
    // 'hashtags/trend',
    // 'hashtags/users',
    // 'i',
    // 'i/apps',
    // 'i/authorized-apps',
    // 'i/change-password',
    // 'i/delete-account',
    // 'i/export-blocking',
    // 'i/export-following',
    // 'i/export-mute',
    // 'i/export-notes',
    // 'i/export-user-lists',
    // 'i/favorites',
    // 'i/gallery/likes',
    // 'i/gallery/posts',
    // 'i/get-word-muted-notes-count',
    // 'i/import-following',
    // 'i/import-user-lists',
    // 'i/notifications',
    // 'i/page-likes',
    // 'i/pages',
    // 'i/pin',
    // 'i/read-all-messaging-messages',
    // 'i/read-all-unread-notes',
    // 'i/read-announcement',
    // 'i/regenerate-token',
    // 'i/registry/get-all',
    // 'i/registry/get-detail',
    // 'i/registry/get',
    // 'i/registry/keys-with-type',
    // 'i/registry/keys',
    // 'i/registry/remove',
    // 'i/registry/scopes',
    // 'i/registry/set',
    // 'i/revoke-token',
    // 'i/signin-history',
    // 'i/unpin',
    // 'i/update-email',
    // 'i/update',
    // 'i/user-group-invites',
    // 'i/2fa/done',
    // 'i/2fa/key-done',
    // 'i/2fa/password-less',
    // 'i/2fa/register-key',
    // 'i/2fa/register',
    // 'i/2fa/remove-key',
    // 'i/2fa/unregister',
    // 'messaging/history',
    // 'messaging/messages',
    // 'messaging/messages/create',
    // 'messaging/messages/delete',
    // 'messaging/messages/read',
    // 'meta',
    // 'miauth/gen-token',
    // 'mute/create',
    // 'mute/delete',
    // 'mute/list',
    // 'my/apps',
    // 'notes',
    // 'notes/children',
    // 'notes/clips',
    // 'notes/conversation',
    // 'notes/create',
    // 'notes/delete',
    // 'notes/favorites/create',
    // 'notes/favorites/delete',
    // 'notes/featured',
    // 'notes/global-timeline',
    // 'notes/hybrid-timeline',
    // 'notes/local-timeline',
    // 'notes/mentions',
    // 'notes/polls/recommendation',
    // 'notes/polls/vote',
    // 'notes/reactions',
    // 'notes/reactions/create',
    // 'notes/reactions/delete',
    // 'notes/renotes',
    // 'notes/replies',
    // 'notes/search-by-tag',
    // 'notes/search',
    'notes/show',
    // 'notes/state',
    // 'notes/timeline',
    // 'notes/unrenote',
    // 'notes/user-list-timeline',
    // 'notes/watching/create',
    // 'notes/watching/delete',
    // 'notifications/create',
    // 'notifications/mark-all-as-read',
    // 'notifications/read',
    // 'page-push',
    // 'pages/create',
    // 'pages/delete',
    // 'pages/featured',
    // 'pages/like',
    // 'pages/show',
    // 'pages/unlike',
    // 'pages/update',
    'ping',
    // 'pinned-users',
    // 'promo/read',
    // 'request-reset-password',
    // 'reset-password',
    // 'room/show',
    // 'room/update',
    // 'stats',
    // 'server-info',
    // 'sw/register',
    // 'username/available',
    // 'users',
    // 'users/clips',
    // 'users/followers',
    // 'users/following',
    // 'users/gallery/posts',
    // 'users/get-frequently-replied-users',
    // 'users/groups/create',
    // 'users/groups/delete',
    // 'users/groups/invitations/accept',
    // 'users/groups/invitations/reject',
    // 'users/groups/invite',
    // 'users/groups/joined',
    // 'users/groups/owned',
    // 'users/groups/pull',
    // 'users/groups/show',
    // 'users/groups/transfer',
    // 'users/groups/update',
    // 'users/lists/create',
    // 'users/lists/delete',
    // 'users/lists/list',
    // 'users/lists/pull',
    // 'users/lists/push',
    // 'users/lists/show',
    // 'users/lists/update',
    // 'users/notes',
    // 'users/pages',
    // 'users/recommendation',
    // 'users/relation',
    // 'users/report-abuse',
    // 'users/search-by-username-and-host',
    // 'users/search',
    'users/show',
    'users/stats',
];
