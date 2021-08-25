import { useEffect, useState } from "react";

//Media query hook to check certain query match

function useMediaQuery(query, defaultMatches = window.matchMedia(query)) {
  const [matches, setMatches] = useState(defaultMatches);

  //listening to changes with useeffect
  useEffect(() => {
    //see if query matches or not
    const media = window.matchMedia(query);

    //if no match with current match state
    if (media.matches !== matches) setMatches(media.matches);
   
    const listener = () => setMatches(media.matches);
    //everytime change calls the listener
    media.addListener(listener);
    //clean every unmount
    return () => media.removeListener(listener);
    //listen everytime query changes
  }, [query, matches]);

  return matches;
}

export default useMediaQuery;
