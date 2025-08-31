import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

import "./InfoBox.css";

export default function InfoBox({ weatherInfo }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1641970304222-b2b332808a4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const HOT_URL =
    "https://media.istockphoto.com/id/1151755587/photo/sunrise-behind-a-tropical-island-in-the-maldives.webp?a=1&b=1&s=612x612&w=0&k=20&c=392UHMCNOKxKp7zAbsiUlmxGkUONeMBzaOJ-MXUCjkg=";

  const COLD_URL =
    "https://images.unsplash.com/photo-1519944159858-806d435dc86b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1536329978773-2f8ac431f330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div className="info-box">
      <h2>Details of Weather of {weatherInfo.city.toUpperCase()}</h2>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              weatherInfo.humidity > 80
                ? RAIN_URL
                : weatherInfo.temp > 20
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {weatherInfo.city.toUpperCase()} &nbsp;
              {weatherInfo.humidity > 80 ? (
                <ThunderstormIcon />
              ) : weatherInfo.temp > 20 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <div>
                <strong>Temperature:</strong> {weatherInfo.temp}°C
              </div>
              <div>
                <strong>Feels Like:</strong> {weatherInfo.feelsLike}°C
              </div>
              <div>
                <strong>Humidity:</strong> {weatherInfo.humidity}%
              </div>
              <div>
                <strong>Max Temperature:</strong> {weatherInfo.tempMax}°C
              </div>
              <div>
                <strong>Min Temperature:</strong> {weatherInfo.tempMin}°C
              </div>
              <div>
                <strong>Condition:</strong> {weatherInfo.weather}
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
