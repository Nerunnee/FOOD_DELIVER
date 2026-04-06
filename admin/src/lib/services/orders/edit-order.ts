export const putOrder = async (id: number, status: string) => {
  const body = { status };

  try {
    await fetch(`http://localhost:4000/orders/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.log(error);
  }
};
