# email-checker
An extension to check email offer if you get Accepted or Rejected

This extension works based on keywords that offten used in an email offer.

If the email have a matched keyword for rejection it will display something like this...

![Screenshot 2023-09-11 at 9 12 35 PM (1)](https://github.com/OsamaNagi/email-checker/assets/63210048/55a5ad22-0599-419a-9b7e-82edd03a7b76)

And for acceptance...

![Screenshot 2023-09-11 at 9 13 00 PM (1)](https://github.com/OsamaNagi/email-checker/assets/63210048/a352a465-b16b-4bff-b796-7858f415bbc1)

> [!NOTE]
> This extension was made for instantly knowing wether you got accepted or not.
> But always read your email carefully despite the result.

## Installation

1. Clone the repository:

```sh
git@github.com:OsamaNagi/email-checker.git
```

2. Go to Extensions -> manage extensions

3. Turn on Developer mode

4. Upload the extension

And you are good to go.

To run the Extension open your email and simply press on the extension icon.

> [!NOTE]
> If you didn't see an action it's due to lack of the keywords.
> feel free to contribute to the repo by adding more descriptive keywords.

## How to contribute

Just add the key word to the `rejectionKeywords` or `acceptanceKeywords` array.

```sh
const rejectionKeywords = [
  'Regret',
  "We're sorry",
  // add it here
]
```
or 

```sh
const acceptanceKeywords = [
    'Accepted',
    'Approved',
    // add it here
]
```


