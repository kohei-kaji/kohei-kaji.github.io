// Places I have presented at or attended in person.
// Each entry: [label (HTML), latitude, longitude, year, photos (optional)]
// photos: array of file names under /files/photos/ (use web-sized .jpg, not HEIC).
//   A photo may also be {"file": "x.jpg", "caption": "shown at the bottom-right of the enlarged view"}.
// Add places/photos with `uv run map/manage_map.py` (see map/README.md), or edit this file by hand.
var addressPoints = [
  // --- International ---
  ["EMNLP 2026<br />Budapest, Hungary", 47.4979, 19.0402, 2026],
  ["SMLP 2026 (summer school)<br />University of Potsdam, Germany", 52.4088, 12.9762, 2026, ["potsdam_station.jpg", {"file": "potsdam_monument.jpg", "caption": "ポツダムのトルーマン邸宅前にある原爆追悼碑"}]],
  ["CoNLL 2026<br />San Diego, CA, USA", 32.7157, -117.1611, 2026, ["sd_presentation.jpg", "sd_beach.jpg", "sd_beach2.jpg", "sd_ship.jpg"]],
  ["HSP 2026<br />Cambridge, MA, USA", 42.3736, -71.1097, 2026, ["boston_presentation.jpg", {"file": "boston_city.jpg", "caption": "ボストンの街並み"}]],
  ["CPL 2025<br />Utrecht, Netherlands", 52.0907, 5.1214, 2025, ["utrecht_city.jpg", "utrecht_tower.jpg", {"file": "utrecht_light.jpg", "caption": "ミッフィーの信号"}]],
  ["CogSci 2025<br />San Francisco, CA, USA", 37.7749, -122.4194, 2025, [{"file": "sf_bridge.jpg", "caption": "ゴールデンゲートブリッジと霧"}, {"file": "sf_city.jpg", "caption": "ケーブルカーと坂"}]],
  ["NAACL 2025<br />Albuquerque, NM, USA", 35.0844, -106.6504, 2025, ["albuquerque_city.jpg", {"file": "albuquerque_juice.jpg", "caption": "びっくりするほど美味しくなかったジュース"}]],
  ["CoNLL 2024<br />Miami, FL, USA", 25.7617, -80.1918, 2024, ["miami_presentation.jpg", "miami_award.jpg", {"file": "miami_sunrise.jpg", "caption": "朝焼け"}, {"file": "miami_sunrise2.jpg", "caption": "朝焼け2"}]],
  ["CogSci 2024<br />Rotterdam, Netherlands", 51.9244, 4.4777, 2024, ["rotterdam_city.jpg", "rotterdam_house.jpg", "rotterdam_nijntje.jpg"]],
  ["LENLS 2023<br />Osaka University, Japan", 34.8046, 135.4569, 2023],
  ["LENLS 2022<br />Ochanomizu University, Tokyo, Japan", 35.7171, 139.7295, 2022],

  // --- Japan ---
  ["NLP2026 (言語処理学会第32回年次大会)<br />Utsunomiya, Japan", 36.5551, 139.8828, 2026],
  ["NLP2025 (言語処理学会第31回年次大会)<br />Nagasaki, Japan", 32.7503, 129.8779, 2025, ["nagasaki_cat.jpg"]],
  ["LSJ 168 (日本言語学会第168回大会)<br />Tokyo, Japan", 35.6895, 139.6917, 2024],
  ["NLP2024 (言語処理学会第30回年次大会)<br />Kobe, Japan", 34.6901, 135.1955, 2024],
  ["NLP2023 (言語処理学会第29回年次大会)<br />Okinawa, Japan", 26.2815, 127.7280, 2023],
];
