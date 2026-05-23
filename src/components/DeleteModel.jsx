"use client";

import { deleteProduct } from "@/app/lib/card/action";
import {AlertDialog, Button} from "@heroui/react";

export function DeleteModal({productId}) {
    const handelDelete = async () => {
        const data = await deleteProduct(productId);
        console.log(data)
    }
  return (
    <AlertDialog>
      <Button variant="danger">Delete car</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete car permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome car</strong> and all of its
                data.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handelDelete} variant="danger">
                Delete car
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}

