import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

export function CategoryCard({ title, image }) {
  return (
      <Card>
          <CardHeader floated={false} className="flex justify-center p-0 m-0 border-0">
              <img src={image} alt="image" className="block w-3/4 m-0 p-0 border-0" />
          </CardHeader>
          <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                  {title}
              </Typography>
              <Typography color="blue-gray" className="font-medium" textGradient>
                  CEO / Co-Founder
              </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
              <Tooltip content="Like">
                  <Typography
                      as="a"
                      href="#facebook"
                      variant="lead"
                      color="blue"
                      textGradient
                  >
                      <i className="fab fa-facebook" />
                  </Typography>
              </Tooltip>
              <Tooltip content="Follow">
                  <Typography
                      as="a"
                      href="#twitter"
                      variant="lead"
                      color="light-blue"
                      textGradient
                  >
                      <i className="fab fa-twitter" />
                  </Typography>
              </Tooltip>
              <Tooltip content="Follow">
                  <Typography
                      as="a"
                      href="#instagram"
                      variant="lead"
                      color="purple"
                      textGradient
                  >
                      <i className="fab fa-instagram" />
                  </Typography>
              </Tooltip>
          </CardFooter>
      </Card>
  );
}
