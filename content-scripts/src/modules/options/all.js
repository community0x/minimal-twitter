
import {
  changeBookmarksButton,
  changeCirclesButton,
  changeCommunitiesButton,
  changeExploreButton,
  changeHomeButton,
  changeListsButton,
  changeMessagesButton,
  changeNavigationButtonsLabels,
  changeNavigationButtonsLabelsHover,
  changeNavigationCenter,
  changeNotificationsButton,
  changeProfileButton,
  changeTopArticlesButton,
  changeTopicsButton,
  changeTwitterBlueButton,
  changeUnreadCountBadge,
} from "./navigation";

import { changeGrowButton, changeTypefullyComposerButtons } from "./typefully";


// Array of user preferences, passed to `injectAllChanges`
export const userPreferences = [
  "timelineWidth",
  "timelineBorders",
  "tweetBorders",
  "stickyHeader",
  "homeButton",
  "exploreButton",
  "notificationsButton",
  "messagesButton",
  "bookmarksButton",
  "topArticlesButton",
  "communitiesButton",
  "topicsButton",
  "circlesButton",
  "listsButton",
  "twitterBlueButton",
  "typefullyGrowTab",
  "profileButton",
  "navigationButtonsLabelsHover",
  "navigationButtonsLabels",
  "navigationCenter",
  "unreadCountBadge",
  "writerMode",
  "replyCount",
  "retweetCount",
  "likeCount",
  "followCount",
  "tweetButton",
  "searchBar",
  "transparentSearch",
  "removePromotedPosts",
  "removeWhoToFollow",
  "removeTopicsToFollow",
  "removeTimelineTabs",
  "followingTimeline",
  "latestTweets",
  "removeTweetFormatting",
  "trendsHomeTimeline",
  "recentMedia",
  "typefullyComposerButtons",
  "interFont",
  "titleNotifications",
  "cssTextEdited",
];

export const injectAllChanges = (data) => {
  
  changeHomeButton(data?.homeButton); // Home Button
  changeExploreButton(data?.exploreButton); // Explore Button
  changeNotificationsButton(data?.notificationsButton); // Notification Button
  changeMessagesButton(data?.messagesButton); // Messages Button
  changeBookmarksButton(data?.bookmarksButton); // Bookmarks Button
  changeTopArticlesButton(data?.topArticlesButton); // Top Articles Button
  changeCommunitiesButton(data?.communitiesButton); // Communities Button
  changeCirclesButton(data?.circlesButton); // Circles Button
  changeTopicsButton(data?.topicsButton); // Topics Button
  changeListsButton(data?.listsButton); // Lists Button
  changeProfileButton(data?.profileButton); // Profile Button
  changeTwitterBlueButton(data?.twitterBlueButton); // Twitter Blue Button
  changeNavigationButtonsLabelsHover(data?.navigationButtonsLabelsHover); // Navigation Buttons Labels on Hover
  changeNavigationButtonsLabels(data?.navigationButtonsLabels); // Navigation Buttons Labels

  changeGrowButton(data?.typefullyGrowTab); // Typefully Grow Button

};
