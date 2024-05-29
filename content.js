(() => {
  // URL of the new profile picture
  const newProfilePicUrl =
    "https://imgs.search.brave.com/hlFoMcPC8nhQ7lxwo7CsXjBQZjwTgXVzmg2w3iA8hUk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wbmdm/cmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9zbWlsZXktZmFj/ZS1wbmctZnJvbS1w/bmdmcmUtMy0yOTZ4/MzAwLnBuZw";

  // Function to update profile pictures with the new URL
  const updateProfilePictures = () => {
    // Select all profile picture elements
    const profilePics = document.querySelectorAll(
      "img.EntityPhoto-square-3, img.ghost-person, img.update-components-actor__avatar-image"
    );

    // Update the src and srcset attributes of each profile picture
    profilePics.forEach((pic) => {
      pic.src = newProfilePicUrl;
      pic.srcset = newProfilePicUrl;
    });
  };

  // Initial update of profile pictures
  updateProfilePictures();

  // Create a MutationObserver to monitor changes to the DOM
  const observer = new MutationObserver((mutations) => {
    // Update profile pictures when mutations are observed
    mutations.forEach(() => {
      updateProfilePictures();
    });
  });

  // Start observing the document body for changes
  observer.observe(document.body, { childList: true, subtree: true });
})();
