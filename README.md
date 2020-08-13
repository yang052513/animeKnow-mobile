# AnimeKnow Mobile

A mobile version for my previous project AnimeKnow built with React Native. Get daily air animations, search thousands subjects and random high rating animation recommendations with swipe card.

![](assets/banner.png)

## Table of Contents

- [Preview](#01)
- [Install](#02)
- [Features](#03)
- [API and Library](#04)

#

## <span id="01">Preview</span>

<p float="left">
<img src="./assets/subject.gif" height=600 width="auto"/>
<img src="./assets/swipe.gif" height=600 width="auto"/>
</p>
#

## <span id="02">Install</span>

The project is initialized with Expo CLI, which can be installed through the following command

```shell
npm install -g expo-cli
```

Make sure to install all the dependencies before start the project.

```shell
cd animeKnow-mobile
npm i
```

Then you can either running it on a Android emulator

```shell
expo start --android
```

Or running on a IOS simulator

```shell
expo start --ios
```

#

## <span id="03">Features</span>

- Fetch the latest air animations list
- Search more than ten thousands subjects either is animations, books, manga or music to view the subject details
- Data visiualization by analyizing collection distribution and rating scores
- Dont know what to watch? Recommendation feature push the top rank and high rating score animations for you
- Swipe card effect to like or dislike the recommendation

#

## <span id="04">API and Library</span>

- React Native
- React Navigation 5
- React Native Swipe Card
- React Native SVG Charts
- Bangumi API
- Python
