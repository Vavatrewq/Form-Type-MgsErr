export const configisEmail = {
  allow_display_name: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true,
  allow_ip_domain: false,
  domain_specific_validation: false,
  blacklisted_chars: '',
  host_blacklist: [],
};

export const confingPassword = {
  minLength: 0,
  minLowercase: 1,
  minUppercase: 1,
  minNumbers: 1,
  minSymbols: 1,
  returnScore: false,
  pointsPerUnique: 1,
  pointsPerRepeat: 0.5,
  pointsForContainingLower: 10,
  pointsForContainingUpper: 10,
  pointsForContainingNumber: 10,
  pointsForContainingSymbol: 10,
};

export const confingUserName = {
  minLength: 0,
  minLowercase: 1,
  minUppercase: 1,
  minNumbers: 0,
  minSymbols: 0,
  returnScore: false,
  pointsPerUnique: 1,
  pointsPerRepeat: 0.5,
  pointsForContainingLower: 10,
  pointsForContainingUpper: 10,
  pointsForContainingNumber: 0,
  pointsForContainingSymbol: 0,
};
