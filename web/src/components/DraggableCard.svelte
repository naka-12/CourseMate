<script lang="ts">
  //   import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
  //   import { useCallback, useState } from "react";
  //   import type { User, UserID } from "../common/types";
  //   import Card from "./Card.svelte";

  //   const SWIPE_THRESHOLD = 30;

  //   type Props = {
  //     displayedUser: User;
  //     comparisonUserId?: UserID;
  //     onSwipeRight: () => void;
  //     onSwipeLeft: () => void;
  //     clickedButton: string;
  //   };
  //   const {
  //     displayedUser,
  //     comparisonUserId,
  //     onSwipeRight,
  //     onSwipeLeft,
  //     clickedButton,
  //   }: Props = $props();

  //     const dragX = useMotionValue(0);
  //     const dragY = useMotionValue(0);
  //     const [dragging, setDragging] = useState(false);
  //     const [dragProgress, setDragProgress] = useState(0);

  //     useMotionValueEvent(dragX, "change", (latest: number) => {
  //       if (dragging) {
  //         dragX.set(latest);
  //         setDragProgress(latest);
  //       } else {
  //         dragX.set(0);
  //         setDragProgress(0);
  //       }
  //     });

  //     useMotionValueEvent(dragY, "change", (latest: number) => {
  //       if (dragging) {
  //         dragY.set(latest);
  //       } else {
  //         dragY.set(0);
  //       }
  //     });

  //     const handleDragEnd = useCallback(() => {
  //       const x = dragX.get();
  //       if (x > SWIPE_THRESHOLD) {
  //         onSwipeRight();
  //       }
  //       if (x < -SWIPE_THRESHOLD) {
  //         onSwipeLeft();
  //       }
  //       dragX.set(0);
  //       dragY.set(0);
  //     }, [dragX, dragY, onSwipeRight, onSwipeLeft]);

  //     return (
  //       <div>
  //         <section
  //           style={{
  //             pointerEvents: dragging ? "none" : undefined,
  //             height: "100%",
  //           }}
  //         >
  //           <motion.div
  //             drag
  //             dragElastic={0.9}
  //             dragListener={true}
  //             dragConstraints={{ left: 0, right: 0 }}
  //             onDragStart={() => setDragging(true)}
  //             onDragEnd={() => {
  //               setDragging(false);
  //               handleDragEnd();
  //             }}
  //             style={{ x: dragX, y: dragY, padding: "10px" }}
  //             whileTap={{ scale: 0.95 }}
  //           >
  //             <CardOverlay />
  //             <Card
  //               displayedUser={displayedUser}
  //               comparisonUserId={comparisonUserId}
  //             />
  //           </motion.div>
  //         </section>
  //       </div>
  //     );
  //   };
  //

  // {#snippet overlay()}
  //   <div>
  //     {dragProgress > SWIPE_THRESHOLD || clickedButton === "heart" ? (
  //       <div
  //         style={{
  //           position: "absolute",
  //           zIndex: 2,
  //           backgroundColor: "rgba(255, 0, 0, 0.3)",
  //           width: "min(40dvh, 87.5vw)",
  //           height: "70dvh",
  //           pointerEvents: "none",
  //           display: "flex",
  //           justifyContent: "center",
  //           alignItems: "center",
  //         }}
  //       >
  //         <Box
  //           display="flex"
  //           justifyContent="center"
  //           alignItems="center"
  //           flexDirection={"column"}
  //           borderRadius={"50%"}
  //           bgcolor={"white"}
  //           width={"16dvh"}
  //           height={"16dvh"}
  //         >
  //           <FavoriteIcon style={{ color: "red", fontSize: "4.5dvh" }} />
  //           <span class="text-xl mb-1">いいね！</span>
  //         </Box>
  //       </div>
  //     ) : dragProgress < -SWIPE_THRESHOLD || clickedButton === "cross" ? (
  //       <div
  //         style={{
  //           position: "absolute",
  //           zIndex: 2,
  //           backgroundColor: "rgba(0, 0, 0, 0.3)",
  //           width: "min(40dvh, 87.5vw)",
  //           height: "70dvh",
  //           pointerEvents: "none",
  //           display: "flex",
  //           justifyContent: "center",
  //           alignItems: "center",
  //         }}
  //       >
  //         <Box
  //           display="flex"
  //           justifyContent="center"
  //           alignItems="center"
  //           flexDirection={"column"}
  //           borderRadius={"50%"}
  //           bgcolor={"white"}
  //           width={"16dvh"}
  //           height={"16dvh"}
  //         >
  //           <CloseIcon style={{ color: "black", fontSize: "4.5dvh" }} />
  //           <Typography variant="h5" component="h1" mb={1}>
  //             スキップ
  //           </Typography>
  //         </Box>
  //       </div>
  //     ) : null}
  //   </div>
  //   ); };
  // {/snippet}
</script>
