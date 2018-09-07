
## Query params routing 
Get parameters aren't a common thing to match in route, might be impossible with Vanilla router.
Best option is probally to parse them ourselves: https://tylermcginnis.com/react-router-query-strings/

## Reverse URL construction with query string
Doesn't seem to be a way with the query string support lacking.

We'll have to create the query string ourselves....

## Programmatic query string navigation

Best option is probably: 
props.history.push({
  pathname: '',
  search: '?lat=2lon=42'
});

<b>We are responsible for keeping STATE and URL in sync... Not handled by libraries.</b>

Say state:

```
{
  map: {
    lat: 1,
    lng: 2
  },
  router: ...
}
```

with URL:

```
/map/?lat=1&lng=2
```

if we pan, we need to do `navigation` through either Redux router or React router 
AND we need to update the `state.map.lat` and `state.map.lng`.
