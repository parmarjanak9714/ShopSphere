import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

import connectDB from "../../../../lib/mongodb";
import Order from "../../../../models/Order";

export async function POST(request) {
  try {
    await connectDB();

    const token = request.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        {
          message: "Please login to place an order",
        },
        {
          status: 401,
        },
      );
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const body = await request.json();

    const {
      items,
      shippingAddress,
      paymentMethod,
      subtotal,
      deliveryCharge,
      total,
    } = body;

    if (!items || items.length === 0 || !shippingAddress || !paymentMethod) {
      return NextResponse.json(
        {
          message: "Invalid order data",
        },
        {
          status: 400,
        },
      );
    }

    const order = await Order.create({
      user: decoded.userId,
      items,
      shippingAddress,
      paymentMethod,
      subtotal,
      deliveryCharge,
      total,
    });

    return NextResponse.json(
      {
        message: "Order placed successfully",
        order,
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error("Create order error:", error);

    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      {
        status: 500,
      },
    );
  }
}
export async function GET(request) {
  try {
    await connectDB();

    const token = request.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        {
          message: "Please login to view your orders",
        },
        {
          status: 401,
        },
      );
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const orders = await Order.find({
      user: decoded.userId,
      orderStatus: { $ne: "cancelled" },
    }).sort({
      createdAt: -1,
    });

    return NextResponse.json(
      {
        orders,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Get orders error:", error);

    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      {
        status: 500,
      },
    );
  }
}
export async function PATCH(request) {
  try {
    await connectDB();

    const token = request.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        {
          message: "Please login",
        },
        {
          status: 401,
        },
      );
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const { orderId } = await request.json();

    if (!orderId) {
      return NextResponse.json(
        {
          message: "Order ID is required",
        },
        {
          status: 400,
        },
      );
    }

    const order = await Order.findOne({
      _id: orderId,
      user: decoded.userId,
    });

    if (!order) {
      return NextResponse.json(
        {
          message: "Order not found",
        },
        {
          status: 404,
        },
      );
    }

    if (
      order.orderStatus === "shipped" ||
      order.orderStatus === "delivered" ||
      order.orderStatus === "cancelled"
    ) {
      return NextResponse.json(
        {
          message: "This order cannot be cancelled",
        },
        {
          status: 400,
        },
      );
    }

    order.orderStatus = "cancelled";

    await order.save();

    return NextResponse.json(
      {
        message: "Order cancelled successfully",
        order,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Cancel order error:", error);

    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      {
        status: 500,
      },
    );
  }
}
