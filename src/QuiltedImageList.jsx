import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export function QuiltedImageList() {
  return (
    <ImageList sx={{ width: 800, height: 550 }} variant="quilted" cols={6} rowHeight={125}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img {...srcset(item.img, 125, item.rows, item.cols)} alt={item.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://nebula.wsimg.com/c9deb487e186592b8d774109bf1ec284?AccessKeyId=DD836AACEC2D5AC5E5A4&disposition=0&alloworigin=1",
    title: "Oceanside",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/443412/pexels-photo-443412.jpeg?cs=srgb&dl=pexels-tim-gouw-443412.jpg&fm=jpg",
    title: "Trail",
  },
  {
    img: "https://www.smithoptics.com/dw/image/v2/BDPZ_PRD/on/demandware.static/-/Library-Sites-SmithSharedLibrary/default/dw60f2152b/images/Landing/bike-helmet-tech/m-bike-helmet-tech-hero.jpg",
    title: "Goofy",
  },
  {
    img: "https://www.asiantrails.travel/wp-content/uploads/2021/03/nature-cycling-trip_004-1600x900-1.jpg",
    title: "Group",
    cols: 2,
  },
  {
    img: "https://previews.123rf.com/images/warrengoldswain/warrengoldswain1202/warrengoldswain120200023/12347331-wide-angle-view-of-a-cyclist-riding-a-bike-on-a-nature-trail-in-the-mountains-two-people-living-a.jpg",
    title: "Climb",
    cols: 2,
  },
  {
    img: "https://bikepacking.com/wp-content/uploads/2021/04/Fairlight-Faran-2-Review_38.jpg",
    title: "Pack",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://www.goodcycles.org.au/wp-content/uploads/2018/06/drivetrain_tips-1.jpg",
    title: "Drivetrain",
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:1400/1*viNZL-EYwTuW3sVAXtpEyg.jpeg",
    title: "Windowed",
  },
  {
    img: "https://bikerumor.com/wp-content/uploads/2023/08/Rose-Sneak-modern-alloy-hybrid-urban-commuter-gravel-bike_city-bike-life.jpg",
    title: "Coppi",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://www.adventurecycling.org/sites/default/cache/file/5299F75C-62E1-BC68-648B835F9908B819.jpg",
    title: "Lead",
  },
  {
    img: "https://cdn-apeka.nitrocdn.com/xKltwSUnXEmUnpFfLKhCPoBNktqaOXPr/assets/images/optimized/rev-293e035/discerningcyclist.com/wp-content/uploads/2023/04/gravel-biking-1000x665.jpg",
    title: "Sun",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    cols: 2,
  },
];
