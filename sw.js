/* Lets Chrome offer "Install app". Caches nothing on purpose, so an
   updated form is picked up the next time it is opened. */
self.addEventListener('install',  function(){ self.skipWaiting(); });
self.addEventListener('activate', function(){ self.clients.claim(); });
self.addEventListener('fetch',    function(){ /* straight to the network */ });
