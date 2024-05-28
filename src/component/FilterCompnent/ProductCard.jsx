// ProductCard.js
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { singleproduct } from "../../store/Slices/ProductSlice";

export default function ProductCard({ id, name, text, img, price, colors }) {
  let dispatch = useDispatch();
  const { type } = useParams();
  return (
    <div>
      <Link to={`/filteredProducts/${type}/${id}`}>
        <Card className="w-96" onClick={() => dispatch(singleproduct(id))}>
          <CardHeader color="blue" className="relative h-96">
            <img src={img} alt="img-blur-shadow" className="h-full w-full" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h5" className="mb-2">
              {name}
            </Typography>
            <Typography>{text}</Typography>
          </CardBody>
          <CardFooter
            divider
            className="flex items-center justify-between py-3"
          >
            <Typography variant="small">{price}$</Typography>
            <Typography variant="small" color="gray" className="flex gap-1">
              {colors?.map((color, index) => {
                return (
                  <i
                    className="fas fa-map-marker-alt fa-sm mt-[3px] rounded-full p-2 mr-4 "
                    key={index}
                    style={{ backgroundColor: color }}
                  ></i>
                );
              })}
            </Typography>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
}
