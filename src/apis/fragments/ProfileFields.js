fragment ProfileFields on Profile {
  id
  name
  handle
  bio
  ownedBy
  isFollowedByMe
  stats {
    totalFollowers
    totalFollowing
  }
  attributes {
    key
    value
  }
  picture {
    ... on MediaSet {
      original {
        url
      }
    }
    ... on NftImage {
      uri
    }
  }
  followModule {
    __typename
  }
}